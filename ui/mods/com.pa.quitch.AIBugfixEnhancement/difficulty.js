var aiBugfixLoaded;

if (!aiBugfixLoaded) {
  aiBugfixLoaded = true;

  function aiBugfixPersonalities() {
    try {
      var temp = {};

      _.forEach(model.aiPersonalities(), function (value, key) {
        if (key === "Hard") {
          temp.NormalPlus = {
            name: "NormalPlus",
            display_name: loc("!LOC:Normal") + "+",
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags: ["Default", "SlowerExpansion"],
            metal_drain_check: 0.24,
            energy_drain_check: 0.35,
            metal_demand_check: 0.41,
            energy_demand_check: 0.5,
            micro_type: 1,
            go_for_the_kill: true,
            priority_scout_metal_spots: false,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.5,
            adv_eco_mod: 1.0,
            adv_eco_mod_alone: 1.0,
            factory_build_delay_min: 1,
            factory_build_delay_max: 3,
            unable_to_expand_delay: 0,
            per_expansion_delay: 0,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 1.0,
            fabber_alone_on_planet_mod: 2.0,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 2,
            max_basic_fabbers: 6,
            min_advanced_fabbers: 3,
            max_advanced_fabbers: 20,
            starting_location_evaluation_radius: 200,
          };
        }

        temp[key] = model.aiPersonalities()[key];
      });

      temp.Random = {
        name: "Random",
        display_name: loc("!LOC:Random"),
      };

      model.aiPersonalities(temp);

      // assign random personalities when start game clicked
      model.startGame = (function () {
        var cachedFunction = model.startGame;

        return function () {
          var selectPersonality = function () {
            var availablePersonalities = _.filter(
              model.aiPersonalityNames(),
              function (personality) {
                return (
                  !_.includes(personality, "Random") &&
                  !_.includes(personality, "Idle")
                );
              }
            );
            return _.sample(availablePersonalities);
          };

          _.forEach(model.armies(), function (army) {
            _.forEach(army.slots(), function (slot) {
              if (slot.ai() === true && slot.aiPersonality() === "Random") {
                slot.aiPersonality(selectPersonality());
              }
            });
          });

          return cachedFunction.apply(this, arguments);
        };
      })();
    } catch (e) {
      console.error(e);
      console.error(JSON.stringify(e));
    }
  }
  aiBugfixPersonalities();
}
