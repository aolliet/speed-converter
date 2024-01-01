import re

from flask import Flask, request, render_template
app = Flask(__name__)

def convertir_en_numerique(valeur):
    # Teste si la valeur est au format "mm:ss"
    match = re.match(r'^(\d{1,2}):(\d{2})$', valeur)
    if match:
        minutes, secondes = map(int, match.groups())
        if minutes >= 0 and 0 <= secondes < 60:
            # Convertit en minutes décimales
            valeur_numerique = minutes + secondes / 60
            return valeur_numerique
    else:
        try:
            # Essaye de convertir en nombre
            valeur_numerique = float(valeur)
            return valeur_numerique
        except ValueError:
            pass
    return None  # Retourne None si la conversion n'est pas possible

def min_per_km_to_km_per_h(min_per_km):
  km_per_h = 60 / min_per_km
  return km_per_h

def km_per_h_to_min_per_km(km_per_h):
  min_per_km = 60 / km_per_h
  return min_per_km

def min_per_mile_to_mile_per_h(min_per_mile):
  mile_per_h = 60 / min_per_mile
  return mile_per_h

def mile_per_h_to_min_per_mile(mile_per_h):
  min_per_mile = 60 / mile_per_h
  return min_per_mile

@app.route("/", methods=["GET", "POST"])
def convert():
  if request.method == "POST":
    unitaconv = request.form["unitaconv"]
    unit = request.form["unit"]
    if unitaconv == unit:
      result = " "+ unit
    elif unitaconv == "minkm":
      min_per_km = float(convertir_en_numerique(request.form["speed"]))
      km_per_h = min_per_km_to_km_per_h(min_per_km)
      result = " min/km \u2192 "+ str(round(km_per_h,2))+" km/h"
    elif unitaconv == "kmh":
      km_per_h = float(request.form["speed"])
      min_per_km = km_per_h_to_min_per_km(km_per_h)
      result = " km/h \u2192 "+ str(round(min_per_km,2))+" min/km"
    elif unitaconv == "minmile":
      min_per_mile = float(convertir_en_numerique(request.form["speed"]))
      mile_per_h = min_per_km_to_km_per_h(min_per_mile)
      result = " min/mi \u2192 "+ str(round(mile_per_h,2))+" mi/h"
    elif unitaconv == "mileh":
      mile_per_h = float(request.form["speed"])
      min_per_mile = km_per_h_to_min_per_km(mile_per_h)
      result = " mi/h \u2192 "+ str(round(min_per_mile,2))+" min/mi"
    return render_template("index.html", result=result)
  return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)