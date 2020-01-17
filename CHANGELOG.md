# CHANGELOG

#### DEV

- Fix issues which impact skirmish and multiplayer and can be resolved through JSON:
  - Hover units will not get stuck on islands with land armies or in ponds with naval fleets.
  - Bluehawk Mobile Tactical Missiles are handled correctly as a long-range unit.
  - Recognises that the Advanced Naval Factory can be effective even without a naval route.
  - Recognises that the Basic Vehicle Factory can be effective even without a land route.
  - Builds the Phoenix Advanced Fighter.
  - Builds the Horsefly Advanced Strafer.
  - Doesn't produce units it cannot fit in platoons.
  - Removes unnecessary economy checks from Titan builds.
  - Builds the Atlas Titan.
  - Builds the Ares Titan.
  - Doesn't limit its Drifter Hover Tank builds when there is no land route.
  - Doesn't create naval fleets consisting of only Barracuda Naval Barges.
