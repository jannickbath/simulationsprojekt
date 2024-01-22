# Simulationsprojekt Dokumentation

## Projektziel

Das Hauptziel dieses Projekts besteht darin, ein herausforderndes und lehrreiches Singleplayer-Rennspiel zu entwickeln, bei dem die Spieler ihre Fahrzeuge durch das Schreiben von Texten steuern. Die Schreibgeschwindigkeit beeinflusst die Fortbewegungsgeschwindigkeit der Fahrzeuge direkt. Zusätzlich soll ein spezieller Zufallsfaktor in Form von zufälligen Geschwindigkeitsänderungen für Bots und verschiedenen Items, wie Barrieren, das Spielerlebnis variabel gestalten.

## Art des Projektes

Das Projekt fällt in die Kategorie der Unterhaltungsspiele und kombiniert Elemente des Rennspiels mit einer Schreibmechanik. Es ist als Singleplayer-Erfahrung konzipiert, bei der Spieler gegen Bots antreten, um als Erster die Ziellinie zu überqueren. Die Integration eines bestimmten Zufallsfaktors, insbesondere durch die zufälligen Geschwindigkeitsänderungen für Bots und verschiedene Items, macht das Spiel nicht nur herausfordernd, sondern verleiht ihm auch eine dynamische und überraschende Komponente.

## Betriebliche Umfeldbeschreibung

### Auftragnehmer

Ich agiere als Auftragnehmer für dieses Projekt im Rahmen meiner schulischen Ausbildung zum Fachinformatiker für Anwendungsentwicklung. Meine Expertise umfasst den Einsatz des Contao Frameworks, PHP, Typescript, JavaScript, SCSS, CSS und HTML. Insbesondere bevorzuge ich React mit Typescript für meine Frontend-Entwicklungen. Dieses Simulationsprojekt ist ein integraler Bestandteil meiner schulischen Ausbildung und bietet eine praxisnahe Anwendung meiner erworbenen Fähigkeiten.

### Auftraggeber

Die Berufsschule BS-Technik Rostock fungiert als Auftraggeber dieses Projekts im Rahmen meiner Ausbildung. Die Anforderungen wurden in Absprache mit der Berufsschule festgelegt, wobei der Fokus auf den folgenden Kriterien liegt:

- Die Oberfläche sollte mindestens 5 Eingabe-Parameter aufweisen.
- Es sollten zwei Zufallsparameter implementiert werden, einmal basierend auf der Gaußschen Normalverteilung und einmal auf der Normalverteilung.
- Es sollten drei verschiedene Stufen der Simulationsgeschwindigkeit vorhanden sein: langsam, mittel, schnell.
- Mindestens eine Animation muss in der Simulation integriert werden.
Die Simulation sollte zeitabhängig sein

## Ausgangssituation

Die Berufsschule BS-Technik Rostock beauftragt im Rahmen der Ausbildung zum Fachinformatiker für Anwendungsentwicklung die Entwicklung einer Simulation. Diese Simulation soll verschiedene Kriterien erfüllen, um eine praxisnahe Anwendung der erworbenen Fähigkeiten zu ermöglichen.

Die spezifischen Anforderungen an die Simulation sind:

- Einbindung der Gaußschen Normalverteilung und der Normalverteilung als Zufallsparameter.
- Umsetzung von drei verschiedenen Geschwindigkeitsstufen.
- Gewährleistung der zeitlichen Abhängigkeit der Simulation.
- Integration von Animationen zur Steigerung der Nutzererfahrung.

## Analyse vom Ist-Zustand

Der aktuelle Ist-Zustand zeigt, dass bisher keine vorhandene Simulation oder vergleichbare Anwendung mit den spezifischen Anforderungen der Berufsschule BS-Technik Rostock existiert. Dies eröffnet die Möglichkeit, eine Simulation von Grund auf zu entwickeln, die den gewünschten Kriterien entspricht.

## Soll-Konzept

### Architektur und Design

Für die Architektur des Projekts habe ich die Umsetzung als React-Typescript-Projekt vorgesehen, wobei das Zustandsmanagement durch die Verwendung der Bibliothek "Zustand" realisiert wird. Die Architektur folgt einer objektorientierten Herangehensweise, um die Prinzipien der Clean-Code-Ideologie bestmöglich umzusetzen.

Das Design des Projekts konzentriert sich auf eine benutzerfreundliche Gestaltung der Benutzeroberfläche. Dabei liegt der Fokus darauf, die Eingabe-Parameter, Zufallsparameter, Geschwindigkeitsstufen, Animationen und zeitliche Abhängigkeit übersichtlich und intuitiv zu präsentieren. Die Visualisierung der Spielmechaniken erfolgt klar und ansprechend, um eine gute Benutzererfahrung zu gewährleisten.

Der Ablaufplan für die Umsetzung sieht vor, zunächst das UI zu designen und zu entwickeln. Anschließend wird die Implementierung der Grundmechaniken eines textbasierten Rennspiels folgen. Zum Abschluss ist geplant, den Zufallsfaktor durch die Integration bestimmter Items einzuführen.

Des Weiteren ist die Implementierung von Black-Box-Tests vorgesehen, die mithilfe der Bibliothek "Cypress" durchgeführt werden. Dies stellt sicher, dass die Funktionalitäten des Projekts in verschiedenen Szenarien erfolgreich getestet werden.

### Auswahl der Technologien

Für die Auswahl der Technologien habe ich mich auf bewährte Werkzeuge konzentriert, die die Effizienz und Qualität des Projekts sicherstellen.

#### Frontend

Die Verwendung von React in Verbindung mit Typescript bietet eine robuste Basis für die Frontend-Entwicklung. Das Zustandsmanagement erfolgt durch die Bibliothek "Zustand", was eine effektive Verwaltung des Anwendungsstatus ermöglicht.

#### Backend

Es war keine Umsetzung eines Backends angedacht.

#### Testing

Für das Testen habe ich auf Black-Box-Tests vorgesehen, die mithilfe der Bibliothek "Cypress" durchgeführt werden sollen. Dies ermöglicht umfassende Tests der Benutzeroberfläche und der Anwendungslogik in verschiedenen Szenarien.

Die Entscheidungen bei der Auswahl dieser Technologien basieren auf deren Zuverlässigkeit, Leistungsfähigkeit und ihrer Anpassungsfähigkeit an die Anforderungen des Projekts.

### Datenmodellierung

Die Datenmodellierung erfolgt gemäß der Vorgaben von "Zustand", wodurch eine temporäre Speicherung der Daten in klar abgegrenzten Slices erfolgt. Diese Slices ermöglichen eine klare Strukturierung und Abgrenzung der Daten im Bezug auf verschiedene Komponenten der Simulation.

Da das Projekt kein Backend vorsieht, werden keine persistenten Daten verwendet. Die Datenverwaltung konzentriert sich auf die effiziente Nutzung des "Zustand"-Managements, um eine konsistente und reaktive Verwaltung der Daten während der Laufzeit der Anwendung zu gewährleisten.

Die objektorientierte Herangehensweise wird dabei beibehalten, um die Struktur und Wartbarkeit der Datenmodelle zu optimieren.
