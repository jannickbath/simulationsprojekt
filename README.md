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

Empfohlen für Windows:

### Python

Vorraussetzungen:
- Python

```bash
python3 -m http.server 5174
# oder
py -m http.server 5174
```

### PHP

Vorraussetzungen:
- PHP

Repository klonen und in den Ordner navigieren. Nach anschließendem Ausführen des Kommandos, sollte das Programm unter [localhost:5174](localhost:5174) erreichbar sein.

```bash
php -S localhost:5174
```

Empfohlen für Linux:

### Docker

Vorraussetzungen:
- Docker (bzw. unter Windows -> Docker Desktop)

Das Projekt kann mithilfe von docker mit einem Befehl installiert & ausgeführt werden.

```bash
docker run -p 5174:5174 jannickbath/simulationsprojekt:latest
```

### Source

Vorraussetzungen:
- Linux-System
- NodeJS
- NPM

Auf einem Linux-System kann das Repository geklont und direkt ausgeführt werden.

```bash
npm i # Installiert alle Abhängigkeiten
npm run dev # Started das Programm
```

Anschließend ist das Programm unter [localhost:5174](localhost:5174) erreichbar.

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

# Publish to Docker Hub
docker login # if not already
# (If no tag is specified :latest will be used)
docker tag [localImageName][:localImageTag] [dockerId/username]/[repoName][:repoTag]
docker push [dockerId/username]/[repoName][:repoTag]

# Running from local image
docker load -i [fileName].tar.gz
docker run -p 5174:5174 [imageName]

# Running from docker hub
docker run -p 5174:5174 jannickbath/simulationsprojekt:latest

# Useful commands
docker run -it [imageName]
docker exec -it [containerName] /bin/sh

# Create snapshot of running container
docker pause <container_name_or_id>
docker commit <container_name_or_id> my_snapshot:latest
docker save my_snapshot:latest | gzip > [fileName].tar.gz
docker run -d --name snapshot_container -p 8080:80 my_snapshot:latest
```