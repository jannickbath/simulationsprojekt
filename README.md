# Installation

## Windows

### Vorbereitung

```bash
git clone https://github.com/jannickbath/simulationsprojekt.git
git checkout build
cd dist
```

### Python

Vorraussetzungen:
- Python

```bash
python3 -m http.server 5174
# oder
py -m http.server 5174
```

Anschließend ist das Programm unter [localhost:5174](localhost:5174) erreichbar.

### PHP

Vorraussetzungen:
- PHP

```bash
php -S localhost:5174
```

Anschließend ist das Programm unter [localhost:5174](localhost:5174) erreichbar.

## Linux

### Docker

Vorraussetzungen:
- Docker (bzw. unter Windows -> Docker Desktop)

Das Projekt kann mithilfe von docker mit einem Befehl installiert & ausgeführt werden.

```bash
docker run -p 5174:5174 jannickbath/simulationsprojekt:latest
```

Anschließend ist das Programm unter [localhost:5174](localhost:5174) erreichbar.