# CHANGELOG

## v2.8.2 - 2021-07-28

- Update Normal+ for changes to Normal

## v2.8.1 - 2021-07-13

- Require a naval threat before building torpedo launchers to avoid some occurrences of CanDeployNavalFromBase being unreliable

## v2.8.0 - 2021-07-10

- Remove Reckoner metadata as this is now in the replay feed
- Builds the Stinger Anti-Air Bot

## v2.7.0 - 2021-06-13

- Builds the Icarus Solar Drone

## v2.6.0 - 2021-05-30

- Don't build land and air Titans unless the enemy presence is one they can attack
- No longer checks the energy requirement for the Helios as it won't use the teleporter

## v2.5.0 - 2021-05-11

- Add metadata to allow Reckoner to differentiate vanilla and bugfix AIs

## v2.4.1 - 2021-04-28

- Correctly assign Normal+ difficulty in a new lobby if it was the last difficulty used

## v2.4.0 - 2021-04-27

- Added Normal+ difficulty between Normal and Hard

## v2.3.1 - 2021-01-19

- Fixed incompatibility with Legion

## v2.3.0 - 2021-01-15

- Commander builds Orbital Launcher
- Commander builds Umbrella

## v2.2.0 - 2020-10-29

- Avoid trying to form invalid squads
- Improved compatibility with Second Wave

## v2.1.0 - 2020-10-09

- Land Titan builds require some space around them
- Ensure artillery and tactical land units include each other in their ratio checks
- Scout with Stryker Attack Vehicles

## v2.0.0 - 2020-06-25

- Remove dependency on AI Mod Compatibility Framework

## v1.4.0 - 2020-05-29

- Builds the Stryker Attack Vehicle
- Builds the Piranha Gunboat
- Ensures Spark Tesla Bots are always built by the Unit Cannon
- Ensures Locust Nano Swarms are always built by the Unit Cannon
- Further adjusts how specialist unit ratios are measured to avoid units sitting in the base without a platoon

## v1.3.0 - 2020-04-25

- Enable building of Basic Metal Extractors by Orbital Fabricators
- Enable building of Basic and Advanced Torpedo Launcher
- Removed unnecessary file shadowing

## v1.2.1 - 2020-01-26

- Ensure land combat fabber build checks match the ratio check in the platoon template

## v1.2 - 2020-01-19

- Reversal of island approach, now tries to avoid putting land factories on islands

## v1.1 - 2020-01-18

- Prevents orbital scouts from getting stuck on gas giants

## v1.0.2 - 2020-01-18

- Improve compatibility with Legion Expansion

## v1.0.1 - 2020-01-18

- Fix a spacing error

## v1.0 - 2020-01-18

- Prevents hover units getting stuck on islands with land armies or in ponds with naval fleets
- Ensures Bluehawk Mobile Tactical Missiles are handled as a long-range unit
- Recognises that the Advanced Naval Factory can be effective even without a naval route
- Recognises that the Basic Vehicle Factory can be effective even without a land route
- Builds the Phoenix Advanced Fighter
- Builds the Horsefly Advanced Strafer
- Prevents the inclusion of factories in mobile unit ratio checks
- Removes unnecessary economy checks from Titan builds
- Builds the Atlas Titan
- Builds the Ares Titan
- Uncaps the Drifter Hover Tank build ratio when there is no land route
- Prevents the creation of naval fleets consisting of only Barnacle Naval Barges
