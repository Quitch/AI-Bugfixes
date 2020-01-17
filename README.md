# AI Bugfixes and Enhancements

The base game AI implementation for Planetary Annihilation: TITANS features a number of flaws, primarily due to the AI failing to keep up with an evolving unit roster over the course of the game's lifespan. This mod aims to fix those issues.

Please note that there are many ways to resolve the issues handled by this mod; while its purpose is bugfixing, the solutions chosen are in accordance with my interpretation of how best to resolve them.

### What It Does

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

### What It Doesn't Do

- Fix issues which impact Galactic War, as this mode cannot load server mods.

## Translations

Please help [translate AI Bugfixes and Enhancements](https://poeditor.com/join/project/wHanBb08ma) to your local language.
