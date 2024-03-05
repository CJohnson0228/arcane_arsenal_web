// create more specific types for categories like class race etc

// can use this as the basic structure for the mongoose schema in the server
type AlignmentType = 'lawful good' | 'neutral good' | 'chaotic good' | 'lawful neutral' | 'neutral' | 'chaotic neutral' | 'lawful evil' | 'neutral evil' | 'chaotic evil'

type AttributeTypes = { value: number, bonus: number }

type SavSkillTypes = { prof: boolean, expert: boolean, bonus: number }

type EquipmentTypes = string // update this with proper type

type SpellBookTypes = {
  prepared: boolean,
  name: string,
  description: string,
}

type AttackTypes = {
  name: string,
  atk_bonus: number,
  damage: 'fire' | 'bludgeoning' | 'radiant' | 'necrotic'|'psychic'|'cold'|'force'|'elemental'|'lightning'|'piercing'|'thunder'|'acid',
}

type CharacterType = {
  creator_id: string,
  character_name: string,
  race: string,
  sub_race: string,
  background: string,
  class: string,
  experience: number,
  alignment?: AlignmentType,
  proficiency_bonus: number,
  inspiration: boolean,
  armor_class: number,
  initiative: number,
  speed: number,
  hitpoints: {
    current: number,
    temporary: number,
    max: number,
    hit_dice: number,
    hit_dice_side: 6|8|10|12,
  },
  death_saves: {
    failures: 0|1|2|3,
    successes: 0|1|2|3,
  },
  attributes: {
    strength: AttributeTypes,
    dexterity: AttributeTypes,
    constitution: AttributeTypes,
    intelligence: AttributeTypes,
    wisdom: AttributeTypes,
    charisma: AttributeTypes,
  },
  saving_throws: {
    strength: SavSkillTypes,
    dexterity: SavSkillTypes,
    constitution: SavSkillTypes,
    intelligence: SavSkillTypes,
    wisdom: SavSkillTypes,
    charisma: SavSkillTypes,
  },
  skills: {
    acrobatics: SavSkillTypes,
    animal_handling: SavSkillTypes,
    arcana: SavSkillTypes,
    athletics: SavSkillTypes,
    deception: SavSkillTypes,
    history: SavSkillTypes,
    insight: SavSkillTypes,
    intimidation: SavSkillTypes,
    investigation: SavSkillTypes,
    medicine: SavSkillTypes,
    nature: SavSkillTypes,
    perception: SavSkillTypes,
    persuasion: SavSkillTypes,
    religion: SavSkillTypes,
    sleight_of_hand: SavSkillTypes,
    stealth: SavSkillTypes,
    survival: SavSkillTypes,
  },
  passive_wisdom_perception: number,
  other_proficiencies: {
    weapon_proficiencies: {
      melee: {
        battleaxe: boolean,
        club: boolean,
        dagger: boolean,
        flail: boolean,
        glaive: boolean,
        great_club: boolean,
        greataxe: boolean,
        greatsword: boolean,
        halberd: boolean,
        handaxe: boolean,
        javelin: boolean,
        lance: boolean,
        light_hammer: boolean,
        longsword: boolean,
        mace: boolean,
        maul: boolean,
        morningstar: boolean,
        pike: boolean,
        quarterstaff: boolean,
        rapier: boolean,
        scimitar: boolean,
        shortsword: boolean,
        sickle: boolean,
        spear: boolean,
        trident: boolean,
        war_pick: boolean,
        warhammer: boolean,
        whip: boolean,
      },
      ranged: {
        blowgun: boolean,
        dart: boolean,
        hand_crossbow: boolean,
        heavy_crossbow: boolean,
        light_crossbow: boolean,
        longbow: boolean,
        net: boolean,
        shortbow: boolean,
        sling: boolean,
      },
    },
    armor_proficiencies: {
      light_armor: boolean,
      medium_armor: boolean,
      heavy_armor: boolean,
      shield: boolean,
    },
    tool_proficiencies: {
      artisan: {
        alchemist: boolean,
        brewer: boolean,
        calligrapher: boolean,
        carpenter: boolean,
        cartographer: boolean,
        cobbler: boolean,
        cook: boolean,
        glass_blower: boolean,
        jeweler: boolean,
        leather_worker: boolean,
        mason: boolean,
        navigator: boolean,
        painter: boolean,
        potter: boolean,
        smith: boolean,
        thief: boolean,
        tinker: boolean,
        weaver: boolean,
        wood_carver: boolean,
      },
      gaming: {
        dice: boolean,
        playing_card: boolean,
      },
      musical_instruments: {
        bagpipes: boolean,
        drum: boolean,
        dulcimer: boolean,
        flute: boolean,
        lute: boolean,
        lyre: boolean,
        horn: boolean,
        pan_flute: boolean,
        shawm: boolean,
        viol: boolean,
      },
    },
  },
  languages: string | string[],
  attacks_spellcasting: AttackTypes | AttackTypes[],
  coin_purse: {
    copper: number,
    silver: number,
    electrum: number,
    gold: number,
    platinum: number,
  },
  equipment: EquipmentTypes | EquipmentTypes[],
  personality: {
    personality_traits: string|string[],
    bonds: string|string[],
    ideals: string|string[],
    flaws: string|string[],
  },
  features: string | string[],
  physcial_characteristics: {
    eye_color: string,
    hair_color: string,
    skin_color: string,
    height: string,
    weight: string,
    unique?: string
    // add more if necessary
  },
  character_backstory: string | string[],
  allies: string | string[],
  organizations: string | string[],
  symbol: {
    name: string,
    url?: string,
    description: string,
  },
  additional_feature: string | string[],
  treasure: string | string[] // make adjustments here if necessary
  spellcasting: {
    class: string,
    ability: 'intelligence' | 'wisdom' | 'charisma',
    spell_save_dc: number,
    spell_attack_bonus: number,
    spellBook: {
      cantrips: SpellBookTypes|SpellBookTypes[],
      level_one: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_two: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_three: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_four: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_five: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_six: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_seven: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_eight: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
      level_nine: {
        slots: {
          total: number,
          available: number,
        },
        known: SpellBookTypes|SpellBookTypes[],
      },
    }
  }
}

export default CharacterType

// may move some of these types to another utility file
export type {
  AlignmentType,
  AttributeTypes,
  SavSkillTypes,
  EquipmentTypes,
  SpellBookTypes,
  AttackTypes,
}