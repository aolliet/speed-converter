import React, { useState } from 'react'
import { ArrowRightLeft, Gauge, Timer } from 'lucide-react'

export default function Converter() {
    const [minutes, setMinutes] = useState<string>('')
    const [seconds, setSeconds] = useState<string>('')
    const [speed, setSpeed] = useState<string>('')

    const calculateSpeed = (m: string, s: string) => {
        const min = parseFloat(m) || 0
        const sec = parseFloat(s) || 0

        if (min === 0 && sec === 0) {
            setSpeed('')
            return
        }

        const totalMinutes = min + sec / 60
        if (totalMinutes > 0) {
            const kph = 60 / totalMinutes
            setSpeed(kph.toFixed(2))
        } else {
            setSpeed('')
        }
    }

    const calculatePace = (s: string) => {
        const kph = parseFloat(s) || 0
        if (kph === 0) {
            setMinutes('')
            setSeconds('')
            return
        }
        const totalMinutes = 60 / kph
        const min = Math.floor(totalMinutes)
        const sec = Math.round((totalMinutes - min) * 60)

        // Handle case where seconds rounds to 60
        if (sec === 60) {
            setMinutes((min + 1).toString())
            setSeconds('00')
        } else {
            setMinutes(min.toString())
            setSeconds(sec.toString().padStart(2, '0'))
        }
    }

    const handlePaceMinChange = (val: string) => {
        setMinutes(val)
        calculateSpeed(val, seconds)
    }

    const handlePaceSecChange = (val: string) => {
        setSeconds(val)
        calculateSpeed(minutes, val)
    }

    const handleSpeedChange = (val: string) => {
        setSpeed(val)
        calculatePace(val)
    }

    return (
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Timer className="w-4 h-4" />
                        Pace (min/km)
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            placeholder="Min"
                            value={minutes}
                            onChange={(e) => handlePaceMinChange(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-600 text-slate-100"
                        />
                        <span className="text-2xl text-slate-600 self-center">:</span>
                        <input
                            type="number"
                            placeholder="Sec"
                            value={seconds}
                            onChange={(e) => handlePaceSecChange(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-600 text-slate-100"
                        />
                    </div>
                </div>

                <div className="flex justify-center py-2">
                    <div className="bg-slate-700/50 p-2 rounded-full">
                        <ArrowRightLeft className="w-6 h-6 text-slate-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Gauge className="w-4 h-4" />
                        Speed (km/h)
                    </label>
                    <input
                        type="number"
                        placeholder="0.00"
                        value={speed}
                        onChange={(e) => handleSpeedChange(e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-600 text-slate-100"
                    />
                </div>
            </div>
        </div>
    )
}
