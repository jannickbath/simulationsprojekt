# Simulationsprojekt Dokumentation

## 1. Projektziel

Das Hauptziel dieses Projekts besteht darin, ein herausforderndes und lehrreiches Singleplayer-Rennspiel zu entwickeln, bei dem die Spieler ihre Fahrzeuge durch das Schreiben von Texten steuern. Die Schreibgeschwindigkeit beeinflusst die Fortbewegungsgeschwindigkeit der Fahrzeuge direkt. Zusätzlich soll ein spezieller Zufallsfaktor in Form von zufälligen Geschwindigkeitsänderungen für Bots und verschiedenen Items, wie Barrieren, das Spielerlebnis variabel gestalten.

## 2. Art des Projektes

Das Projekt fällt in die Kategorie der Unterhaltungsspiele und kombiniert Elemente des Rennspiels mit einer Schreibmechanik. Es ist als Singleplayer-Erfahrung konzipiert, bei der Spieler gegen Bots antreten, um als Erster die Ziellinie zu überqueren. Die Integration eines bestimmten Zufallsfaktors, insbesondere durch die zufälligen Geschwindigkeitsänderungen für Bots und verschiedene Items, macht das Spiel nicht nur herausfordernd, sondern verleiht ihm auch eine dynamische und überraschende Komponente.

## 3. Betriebliche Umfeldbeschreibung

### 3.1 Auftragnehmer

Ich agiere als Auftragnehmer für dieses Projekt im Rahmen meiner schulischen Ausbildung zum Fachinformatiker für Anwendungsentwicklung. Meine Expertise umfasst den Einsatz des Contao Frameworks, PHP, Typescript, JavaScript, SCSS, CSS und HTML. Insbesondere bevorzuge ich React mit Typescript für meine Frontend-Entwicklungen. Dieses Simulationsprojekt ist ein integraler Bestandteil meiner schulischen Ausbildung und bietet eine praxisnahe Anwendung meiner erworbenen Fähigkeiten.

### 3.2 Auftraggeber

Die Berufsschule BS-Technik Rostock fungiert als Auftraggeber dieses Projekts im Rahmen meiner Ausbildung. Die Anforderungen wurden in Absprache mit der Berufsschule festgelegt, wobei der Fokus auf den folgenden Kriterien liegt:

- Die Oberfläche sollte mindestens 5 Eingabe-Parameter aufweisen.
- Es sollten zwei Zufallsparameter implementiert werden, einmal basierend auf der Gaußschen Normalverteilung und einmal auf der Normalverteilung.
- Es sollten drei verschiedene Stufen der Simulationsgeschwindigkeit vorhanden sein: langsam, mittel, schnell.
- Mindestens eine Animation muss in der Simulation integriert werden.
Die Simulation sollte zeitabhängig sein

## 4. Ausgangssituation

Die Berufsschule BS-Technik Rostock beauftragt im Rahmen der Ausbildung zum Fachinformatiker für Anwendungsentwicklung die Entwicklung einer Simulation. Diese Simulation soll verschiedene Kriterien erfüllen, um eine praxisnahe Anwendung der erworbenen Fähigkeiten zu ermöglichen.

Die spezifischen Anforderungen an die Simulation sind:

- Einbindung der Gaußschen Normalverteilung und der Normalverteilung als Zufallsparameter.
- Umsetzung von drei verschiedenen Geschwindigkeitsstufen.
- Gewährleistung der zeitlichen Abhängigkeit der Simulation.
- Integration von Animationen zur Steigerung der Nutzererfahrung.

## 5. Analyse vom Ist-Zustand

Der aktuelle Ist-Zustand zeigt, dass bisher keine vorhandene Simulation oder vergleichbare Anwendung mit den spezifischen Anforderungen der Berufsschule BS-Technik Rostock existiert. Dies eröffnet die Möglichkeit, eine Simulation von Grund auf zu entwickeln, die den gewünschten Kriterien entspricht.

## 6. Soll-Konzept

### 6.1 Architektur und Design

Für die Architektur des Projekts habe ich die Umsetzung als React-Typescript-Projekt vorgesehen, wobei das Zustandsmanagement durch die Verwendung der Bibliothek "Zustand" realisiert wird. Die Architektur folgt einer objektorientierten Herangehensweise, um die Prinzipien der Clean-Code-Ideologie bestmöglich umzusetzen.

Das Design des Projekts konzentriert sich auf eine benutzerfreundliche Gestaltung der Benutzeroberfläche. Dabei liegt der Fokus darauf, die Eingabe-Parameter, Zufallsparameter, Geschwindigkeitsstufen, Animationen und zeitliche Abhängigkeit übersichtlich und intuitiv zu präsentieren. Die Visualisierung der Spielmechaniken erfolgt klar und ansprechend, um eine gute Benutzererfahrung zu gewährleisten.

Der Ablaufplan für die Umsetzung sieht vor, zunächst das UI zu designen und zu entwickeln. Anschließend wird die Implementierung der Grundmechaniken eines textbasierten Rennspiels folgen. Zum Abschluss ist geplant, den Zufallsfaktor durch die Integration bestimmter Items einzuführen.

Des Weiteren ist die Implementierung von Black-Box-Tests vorgesehen, die mithilfe der Bibliothek "Cypress" durchgeführt werden. Dies stellt sicher, dass die Funktionalitäten des Projekts in verschiedenen Szenarien erfolgreich getestet werden.

### 6.2 Auswahl der Technologien

Für die Auswahl der Technologien habe ich mich auf bewährte Werkzeuge konzentriert, die die Effizienz und Qualität des Projekts sicherstellen.

#### 6.2.1 Frontend

Die Verwendung von React in Verbindung mit Typescript bietet eine robuste Basis für die Frontend-Entwicklung. Das Zustandsmanagement erfolgt durch die Bibliothek "Zustand", was eine effektive Verwaltung des Anwendungsstatus ermöglicht.

#### 6.2.2 Backend

Es war keine Umsetzung eines Backends angedacht.

#### 6.2.3 Testing

Für das Testen habe ich auf Black-Box-Tests vorgesehen, die mithilfe der Bibliothek "Cypress" durchgeführt werden sollen. Dies ermöglicht umfassende Tests der Benutzeroberfläche und der Anwendungslogik in verschiedenen Szenarien.

Die Entscheidungen bei der Auswahl dieser Technologien basieren auf deren Zuverlässigkeit, Leistungsfähigkeit und ihrer Anpassungsfähigkeit an die Anforderungen des Projekts.

### 6.3 Datenmodellierung

Die Datenmodellierung erfolgt gemäß der Vorgaben von "Zustand", wodurch eine temporäre Speicherung der Daten in klar abgegrenzten Slices erfolgt. Diese Slices ermöglichen eine klare Strukturierung und Abgrenzung der Daten im Bezug auf verschiedene Komponenten der Simulation.

Da das Projekt kein Backend vorsieht, werden keine persistenten Daten verwendet. Die Datenverwaltung konzentriert sich auf die effiziente Nutzung des "Zustand"-Managements, um eine konsistente und reaktive Verwaltung der Daten während der Laufzeit der Anwendung zu gewährleisten.

Die objektorientierte Herangehensweise wird dabei beibehalten, um die Struktur und Wartbarkeit der Datenmodelle zu optimieren.

### 6.4 Implementierung der Simulation

Die Implementierung der Simulation folgt einem strukturierten Ablaufplan, der sicherstellt, dass die Funktionalitäten schrittweise und konsistent entwickelt werden.

#### 6.4.1 UI-Design und -Entwicklung

Die erste Priorität liegt auf der Gestaltung und Entwicklung einer benutzerfreundlichen Benutzeroberfläche. Hierbei werden die Eingabe-Parameter, Zufallsparameter, Geschwindigkeitsstufen, Animationen und die zeitliche Abhängigkeit in die Oberfläche integriert. Die klare und intuitive Darstellung dieser Elemente steht im Mittelpunkt dieses Schrittes.

#### 6.4.2 Grundmechaniken des Rennspiels

Im zweiten Schritt erfolgt die Programmierung der grundlegenden Mechaniken eines textbasierten Rennspiels. Hierbei wird die Steuerung durch Tastatureingaben implementiert, um die Fortbewegung des virtuellen Fahrzeugs zu ermöglichen. Die Fokussierung liegt auf der Umsetzung einer realistischen und ansprechenden Spielerfahrung.

#### 6.4.3 Integration des Zufallsfaktors

Der dritte Schritt beinhaltet die Einbindung von Items, die den Zufallsfaktor in die Simulation bringen. Besonderes Augenmerk wird dabei auf Barrieren als Items gelegt, die den Fortschritt des Spielers verlangsamen. Die Implementierung erfolgt so, dass der Zufallsfaktor das Spielerlebnis bereichert und gleichzeitig herausfordernde Elemente hinzufügt.

Die Umsetzung erfolgt iterativ, wobei nach jedem Schritt eine Überprüfung auf Funktionalität und Benutzerfreundlichkeit erfolgt. Dadurch wird sichergestellt, dass die Simulation schrittweise und konsistent entwickelt wird.

### 6.5 Benutzerinteraktion und Eingabe-Parameter

Die Umsetzung erfolgt mit dem Fokus darauf, die Nutzerfreundlichkeit zu maximieren und dem Spieler eine transparente Steuerung über alle relevanten Spielaspekte zu bieten.

#### 6.5.1 Benutzerinteraktion

Die zentrale Schnittstelle des Spiels ist die Textbox, in der der Nutzer den Text eingibt, um sein Fahrzeug voranzubringen. Dabei wird direktes Feedback in Echtzeit gegeben, ob das auf der Tastatur getippte Zeichen korrekt ist oder nicht. Dies ermöglicht dem Spieler eine unmittelbare Kontrolle über die Geschwindigkeit seines Fahrzeugs.

#### 6.5.2 Rennstrecken-Ansicht

Unterhalb der Textbox befindet sich die Rennstrecken-Ansicht, die einen Überblick über das eigene Fahrzeug und die anderen Fahrzeuge der Bots bietet. Hier kann der Spieler den Fortschritt zu Ziellinie verfolgen. Die Fahrzeuge werden animiert, um Veränderungen im Fortschritt anschaulich darzustellen und die Spielatmosphäre zu intensivieren.

#### 6.5.3 Item Boxen

Es gibt zwei weitere Boxen, die mithilfe von Icons ihre Funktionen anzeigen. Eine Box kann mit der "Alt"-Taste aktiviert werden, während die andere mit der "AltGraph"-Taste aktiviert wird. Die erste Box ermöglicht die Auswahl eines gegnerischen Fahrzeugs, während die zweite Box die Möglichkeit bietet, ein Item zu diesem Fahrzeug zu senden. Die klare visuelle Darstellung durch Icons sorgt für eine intuitive Bedienung dieser Funktionen.

#### 6.5.4 Geschwindigkeitsregler

Ein zusätzlicher Regler wird implementiert, der es dem Spieler ermöglicht, die Simulationsgeschwindigkeit nach seinen Präferenzen einzustellen. Dies bietet eine flexible Anpassung des Spieltempos.

#### 6.5.5 Uhr

Zur Verbesserung der Immersion wird eine Uhr oder ein Timer integriert, der die aktuelle Simulationszeit anzeigt. Dies gibt dem Spieler einen klaren Überblick darüber, wie lange die Simulation bereits läuft.

### 6.6 Teststrategie

Die folgende Teststrategie zielt darauf ab, eine robuste und fehlerfreie Simulation zu gewährleisten.

#### 6.6.1 Unit-Tests für einzelne Komponenten

Es werden spezifische Unit-Tests entwickelt, um die Funktionalitäten einzelner Komponenten, wie die Textbox, Rennstrecken-Ansicht und Items, auf Herz und Nieren zu prüfen. Dies stellt sicher, dass jede Komponente in Isolation korrekt funktioniert.

#### 6.6.2 Integrationstests für die Gesamtsimulation

Die Integrationstests fokussieren sich darauf, die Wechselwirkungen zwischen den verschiedenen Komponenten sicherzustellen. Dabei wird die Gesamtsimulation auf verschiedene Szenarien und Nutzereingaben getestet, um eine reibungslose Zusammenarbeit aller Elemente zu gewährleisten.

### 6.7 Dokumentation

Die Dokumentation erfolgt durch sorgfältige Kommentierung des Codes, wobei besonderes Augenmerk auf die Erläuterung von Funktionen, Strukturen und Implementierungsdetails gelegt wird.

Die Kommentierung zielt darauf ab, die Klarheit und Verständlichkeit der Codebasis zu verbessern.

## 7. Personal-, Sachmittel-, Termin- und Kostenplanung (Ressourcenplanung)

### 7.1 Personalplanung

Die alleinige Umsetzung des Projekts erfolgt im Rahmen meiner Ausbildung als Fachinformatiker für Anwendungsentwicklung. Alle Entwicklungsaktivitäten, von der Planung über die Umsetzung bis zur Dokumentation, fallen in meinen Verantwortungsbereich.

### 7.2 Sachmittelplanung

Die genutzten Tools für die Entwicklung, wie React, TypeScript, Zustand und Cypress, sind kostenfrei verfügbar und erfordern keine zusätzlichen finanziellen Aufwendungen. Diese Auswahl gewährleistet eine kosteneffiziente Entwicklung.

### 7.3 Terminplanung

Die Terminplanung unterteilt sich in verschiedene Phasen: Planung (15%), Umsetzung (50%) und Dokumentation (35%). Die zeitliche Verteilung ermöglicht eine gezielte Fokussierung auf jede Phase des Projekts. Von den insgesamt verfügbaren 80 Stunden entfallen demnach 12 Stunden auf die Planung, 40 Stunden auf die Umsetzung und 28 Stunden auf die Dokumentation.

### 7.4 Kostenplanung

Da alle genutzten Tools kostenfrei sind und keine externen Ressourcen eingebunden werden, entstehen keine direkten Kosten im Rahmen der Entwicklung. Die Kostenplanung beschränkt sich somit auf die effiziente Nutzung der verfügbaren Zeit.
