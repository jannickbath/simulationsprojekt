# Typeracer Benutzerdokumentation

## Inhaltsverzeichnis
- [Einführung](#einführung)
- [Installation](#installation)
  - [Voraussetzungen](#voraussetzungen)
  - [Schritt-für-Schritt Anleitung](#schritt-für-schritt-anleitung)
- [Erklärung der Benutzeroberfläche](#erklärung-der-benutzeroberfläche)
- [Verwendung](#verwendung)
  - [Funktion 1](#funktion-1)
  - [Funktion 2](#funktion-2)
- [Problembehebung](#problembehebung)
- [FAQs](#faqs)
- [Aktualisierungen](#aktualisierungen)

## Einführung
Kurze Übersicht deiner Software und ihrer Zwecke.

## Installation

### Voraussetzungen
Liste alle Anforderungen auf, die Benutzer vor der Installation benötigen.

- Docker

### Schritt-für-Schritt Anleitung
1. [Schritt 1]
2. [Schritt 2]
3. ...

## Erklärung der Benutzeroberfläche

### Start- & Stopfunktion

Hier eine kurze Erläuterung.

### Bots generieren

Hier eine kurze Erläuterung.

### Item einsetzen (LeftAlt)

Hier eine kurze Erläuterung.

### Ziel auswählen (RightAlt)

Hier eine kurze Erläuterung.

### CPM-Anzeige

Hier eine kurze Erläuterung.

## Items

### Barriere

Hier eine kurze Erläuterung.

### Münze

Hier eine kurze Erläuterung.

### Würfel

Hier eine kurze Erläuterung.

## Verwendung
Erkläre, wie die Hauptfunktionen deiner Software genutzt werden.

### Funktionsweise

### Funktion 1
Detaillierte Anweisungen und Beispiele für Funktion 1.

### Funktion 2
Detaillierte Anweisungen und Beispiele für Funktion 2.

## Problembehebung
Häufig auftretende Probleme und wie man sie lösen kann.

## Docker container bauen

```bash
# Building
docker build -t [yourImageName] .
docker save [imageName] | gzip > [fileName].tar.gz

# Running
docker load -i [fileName].tar.gz
docker run -p 5174:5174 [imageName]

# Useful commands
docker run -it [imageName]
docker exec -it [containerName] /bin/sh

# Create snapshot of running container
docker pause <container_name_or_id>
docker commit <container_name_or_id> my_snapshot:latest
docker save my_snapshot:latest | gzip > [fileName].tar.gz
docker run -d --name snapshot_container -p 8080:80 my_snapshot:latest
```