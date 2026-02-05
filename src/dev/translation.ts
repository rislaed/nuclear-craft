// Processor Machine
Translation.addTranslation("Manufactory", { zh: "小制造机", ru: "Мануфактура", fr: "Fabrique" });
// Isotope Separator
Translation.addTranslation("Separator", { zh: "分离器", ru: "Сепаратор", fr: "Séparateur" });
Translation.addTranslation("Decay Hastener", { zh: "衰变加速器", ru: "Ускоритель распада", fr: "Accélérateur de désintégration" });
Translation.addTranslation("Fuel Reprocessor", { zh: "燃料再处理机", ru: "Топливный сепаратор", fr: "Retraiteur de combustible atomique" });
Translation.addTranslation("Alloy Furnace", { zh: "合金炉", ru: "Сплавная печь", fr: "Four à alliage" });
Translation.addTranslation("Fluid Infuser", { zh: "流体注入器", ru: "Впрыскиватель", fr: "Infuseur de fluide" });
Translation.addTranslation("Melter", { zh: "熔化机", ru: "Плавильня", fr: "Four à fusion" });
Translation.addTranslation("Supercooler", { zh: "超冷却机", ru: "Суперохладитель", fr: "Surfondeur" });
Translation.addTranslation("Electrolyzer", { zh: "电解池", ru: "Электролизёр", fr: "Electrolyseur" });
// Neutron Irradiator
// Translation.addTranslation("Assembler", { zh: "组合机", ru: "Сборщик", fr: "Assembleur" });
Translation.addTranslation("Ingot Former", { zh: "冷却器", ru: "Литейный тигель", fr: "Moule à lingots" });
Translation.addTranslation("Pressurizer", { zh: "压缩机", ru: "Компрессор", fr: "Pressuriseur" });
Translation.addTranslation("Chemical Reactor", { zh: "化学反应器", ru: "Химический реактор", fr: "Réacteur chimique" });
// Salt Mixer
// Translation.addTranslation("Fluid Mixer", { zh: "流体混合器", ru: "Смеситель", fr: "Mélangeur" });
Translation.addTranslation("Crystallizer", { zh: "结晶器", ru: "Кристаллизатор", fr: "Cristalliseur" });
Translation.addTranslation("Fluid Enricher", { zh: "溶解器", ru: "Обогатитель жидкости", fr: "Enrichisseur de fluides" });
Translation.addTranslation("Fluid Extractor", { zh: "流体提取器", ru: "Экстрактор жидкости", fr: "Extracteur de fluide" });
Translation.addTranslation("Centrifuge", { zh: "离心机", ru: "Центрифуга", fr: "Centrifugeuse" });
Translation.addTranslation("Rock Crusher", { zh: "岩石粉碎机", ru: "Камнедробилка", fr: "Pulvérisateur de rochers" });

// Fission Reactor
// Base depletion time: ${FissionFuel.tickToString(params.time)}
// Base power gen: ${params.power} RF/t
// Base heat gen: ${params.heat} H/t

Translation.addTranslation("Decay Generator", { zh: "衰变产能器", ru: "Генератор распада", pt: "Gerador Apodrecedor", fr: "Générateur à désintégration", de: "Zerfallsgenerator" });
// Math.ceil(data.lifetime / 60) + " min"
// data.lifetime + " s"
// Mean lifetime: ${time}
// Power gen: ${data.power} RF/s

// Nuclear Furnace Fuel
// Fuel
// time + " tick"
// "(Smelts  " + (time / 10) + "  items)"


// Battery
Translation.addTranslation("Basic Voltaic Pile", { zh: "基础伏打电堆", ru: "Базовая вольтаическая куча", pt: "Pilha Voltáica Básica (WIP)", fr: "Pile voltaïque basique", de: "Einfache voltaische Säule" });
Translation.addTranslation("Advanced Voltaic Pile", { zh: "高级伏打电堆", ru: "Расширенная вольтаическая куча", fr: "Pile voltaïque avancée" });
Translation.addTranslation("DU Voltaic Pile", { zh: "贫铀伏打电堆", ru: "ДУ вольтаическая куча", fr: "Pile voltaïque DU" });
Translation.addTranslation("Elite Voltaic Pile", { zh: "精英伏打电堆", ru: "Элитная вольтаическая куча", fr: "Pile voltaïque élite" });
Translation.addTranslation("Basic Lithium Ion Battery", { zh: "基础锂离子电池块", ru: "Базовая литий-ионная батарея", pt: "Bateria Básica de Íon de Lítio (WIP)", fr: "Accumulateur lithium-ion basique", de: "Einfache Lithium Ionen Batterie" });
Translation.addTranslation("Advanced Lithium Ion Battery", { zh: "高级锂离子电池块", ru: "Расширенная литий-ионная батарея", fr: "Accumulateur lithium-ion avancé" });
Translation.addTranslation("DU Lithium Ion Battery", { zh: "贫铀锂离子电池块", ru: "ДУ литий-ионная батарея", fr: "Accumulateur lithium-ion DU" });
Translation.addTranslation("Elite Lithium Ion Battery", { zh: "精英锂离子电池块", ru: "Элитная литий-ионная батарея", fr: "Accumulateur lithium-ion élite" });


// "RF: " + ["Input", "Output", "None"][mode[coords.side]]
// Energy Stored: ${energy} / ${storage} ${["", "k", "M", "G"][scale]}RF


// Fission Controller
// [this.networkData.getInt("statSizeX"), this.networkData.getInt("statSizeY"), this.networkData.getInt("statSizeZ")].join("x") + " Fission Reactor"
// fuelData ? fuelData.name : "No Fuel"
// "Cells: " + status.cells
// status.power + " RF/t"
// (status.cooling > 0 ? status.heat + " - " + status.cooling + " = " : "") + (status.heat - status.cooling) + " H/t"


// Must be adjacent to at least one Reactor Cell or active moderator block.
// Must be adjacent to at least one Reactor Cell.
// Must be adjacent to at least one active moderator block.
// Must be adjacent to at least one valid Water Cooler and one valid Redstone Cooler.
// Must be adjacent to at least two active moderator blocks.
// Must be adjacent to at least one Reactor Cell and one Reactor Casing.
// Must be adjacent to at least one valid Water Cooler and one valid Quartz Cooler.
// Must be adjacent to exactly one valid Redstone Cooler and at least one Reactor Casing.
// Must be adjacent to exactly three Reactor Casings at exactly one vertex.
// Must be adjacent to at least two Reactor Cells.
// Must be adjacent to at least one valid Gold Cooler.
// Must be adjacent to at least one active moderator block and one Reactor Cell.
// Must be adjacent to at least one valid Glowstone Cooler.
// Must be adjacent to at least two valid Lapis Coolers along a common axis.
// Must be adjacent to at least one Reactor Casing and one active moderator block.

// "Cooling rate: " + coolerData.cooling + "H/t"
// coolerData.description


// RTG
Translation.addTranslation("Uranium RTG", { zh: "铀放射性热电发电机", ru: "Урановый РИТЭГ", pt: "GTR de Urânio", fr: "GTR à uranium", de: "Uran RTG" });
Translation.addTranslation("Plutonium RTG", { zh: "钚放射性热电发电机", ru: "Плутониевый РИТЭГ", pt: "GTR de Plutônio", fr: "GTR à plutonium", de: "Plutonium RTG" });
Translation.addTranslation("Americium RTG", { zh: "镅放射性热电发电机", ru: "Америциевый РИТЭГ", pt: "GTR de Amerício", fr: "GTR à américium", de: "Americium RTG" });
Translation.addTranslation("Californium RTG", { zh: "锎放射性热电发电机", ru: "Калифорниевый РИТЭГ", pt: "GTR de Califórnio", fr: "GTR à californium", de: "Californium RTG" });

// Solar Panel
Translation.addTranslation("Basic Solar Panel", { zh: "基础太阳能电池板", ru: "Базовая солнечная панель", pt: "Painel Solar Básico", fr: "Panneau solaire basique", de: "Einfaches Solarpanel" });
Translation.addTranslation("Advanced Solar Panel", { zh: "高级太阳能电池板", ru: "Расширенная солнечная панель", fr: "Panneau solaire avancé", de: "Fortgeschrittenes Solarpanel" });
Translation.addTranslation("DU Solar Panel", { zh: "贫铀太阳能电池板", ru: "ДУ солнечная панель", fr: "Panneau solaire DU", de: "DU Solarpanel" });
Translation.addTranslation("Elite Solar Panel", { zh: "精英太阳能电池板", ru: "Элитная солнечная панель", fr: "Panneau solaire élite", de: "Elite Solarpanel" });


// Item/Fluid Generator
Translation.addTranslation("Cobblestone Generator", { zh: "造石机", ru: "Генератор булыжника", pt: "Gerador de Pedregulho", fr: "Générateur de pierres", de: "Bruchsteingenerator" });
Translation.addTranslation("Compact Cobblestone Generator", { zh: "压缩造石机", ru: "Компактный генератор булыжника", pt: "Gerador de Pedregulho Compacto", fr: "Générateur de pierres compact", de: "Kompakter Bruchsteingenerator" });
Translation.addTranslation("Dense Cobblestone Generator", { zh: "致密造石机", ru: "Плотный генератор булыжника", pt: "Gerador de Pedregulho Denso", fr: "Générateur de pierres dense", de: "Dichter Bruchsteingenerator" });
Translation.addTranslation("Infinite Water Source", { zh: "无限水源", ru: "Бесконечный источник воды", pt: "Bloco de Água Infinita", fr: "Source d'eau infinie", de: "Unendliche Wasserquelle" });
Translation.addTranslation("Compact Infinite Water Source", { zh: "压缩无限水源", ru: "Компактный бесконечный источник воды", pt: "Bloco de Água Infinita Compacto", fr: "Source d'eau infinie compacte", de: "Kompakte unendliche Wasserquelle" });
Translation.addTranslation("Dense Infinite Water Source", { zh: "致密无限水源", ru: "Плотный бесконечный источник воды", pt: "Bloco de Água Infinita Denso", fr: "Source d'eau infinie dense", de: "Dichte unendliche Wasserquelle" });
// Helium Collector
// Compact Helium Collector
// Dense Helium Collector
Translation.addTranslation("Nitrogen Collector", { zh: "氮收集器", ru: "Азотный сборщик", pt: "Coletor de Nitrogênio", fr: "Collecteur d'azote", de: "Stickstoffsammler" });
Translation.addTranslation("Compact Nitrogen Collector", { zh: "压缩氮收集器", ru: "Компактный сборщик азота", pt: "Coletor de Nitrogênio Compacto", fr: "Collecteur d'azote compacte", de: "Kompakter Stickstoffsammler" });
Translation.addTranslation("Dense Nitrogen Collector", { zh: "致密氮收集器", ru: "Плотный сборщик азота", pt: "Coletor de Nitrogênio Denso", fr: "Collecteur d'azote dense", de: "Dichter Stickstoffsammler" });


Translation.addTranslation("Nuclear Furnace", { zh: "核熔炉", ru: "Ядерная печь", fr: "Four nucléaire" });


// Metal Blocks
// ...


// Ores
Translation.addTranslation("Copper Ore", { zh: "铜矿石", ru: "Медная руда", pt: "Minério de Cobre", fr: "Minerai de cuivre", de: "Kupfererz" });
Translation.addTranslation("Tin Ore", { zh: "锡矿石", ru: "Оловянная руда", pt: "Minério de Estanho", fr: "Minerai d'étain", de: "Zinnerz" });
Translation.addTranslation("Lead Ore", { zh: "铅矿石", ru: "Свинцовая руда", pt: "Minério de Chumbo", fr: "Minerai de plomb", de: "Bleierz" });
Translation.addTranslation("Thorium Ore", { zh: "钍矿石", ru: "Ториевая руда", pt: "Minério de Tório", fr: "Minerai de thorium", de: "Thoriumerz" });
Translation.addTranslation("Uranium Ore", { zh: "铀矿石", ru: "Урановая руда", pt: "Minério de Urânio", fr: "Minerai d'uranium", de: "Uranerz" });
Translation.addTranslation("Boron Ore", { zh: "硼矿石", ru: "Борная руда", pt: "Minério de Boro", fr: "Minerai de bore", de: "Borerz" });
Translation.addTranslation("Lithium Ore", { zh: "锂矿石", ru: "Литиевая руда", pt: "Minério de Lítio", fr: "Minerai de lithium", de: "Lithiumerz" });
Translation.addTranslation("Magnesium Ore", { zh: "镁矿石", ru: "Магниевая руда", pt: "Minério de Magnésio", fr: "Minerai de magnésium", de: "Magnesiumerz" });

// NC Cell
// Empty Cell
// Water Cell
// Lava Cell
// Milk Cell
// (16000 - item.data) + " mB"

// Fission Material
// ... Oxide
// Tiny Clamp of ...
// FissionMaterial.createWithIsotope("T", "Thorium", 230, 232);
// Translation.addTranslation("Thorium", { zh: "钍", ru: "Торий", fr: "Thorium" });
Translation.addTranslation("Uranium-233", { zh: "铀-233", ru: "Уран-233", fr: "Uranium 233" });
Translation.addTranslation("Uranium-233 Oxide", { zh: "铀-233 氧化物", ru: "Оксид Урана-233", fr: "Oxyde d'uranium 233" });
Translation.addTranslation("Uranium-235", { zh: "铀-235", ru: "Уран-235", fr: "Uranium 235" });
Translation.addTranslation("Uranium-235 Oxide", { zh: "铀-235 氧化物", ru: "Оксид Урана-235 ", fr: "Oxyde d'uranium 235" });
Translation.addTranslation("Uranium-238", { zh: "铀-238", ru: "Уран-238", fr: "Uranium 238" });
Translation.addTranslation("Uranium-238 Oxide", { zh: "铀-238 氧化物", ru: "Оксид Урана-238 ", fr: "Oxyde d'uranium 238" });
Translation.addTranslation("Neptunium-236", { zh: "镎-236", ru: "Нептуний-236", fr: "Neptunium 236" });
Translation.addTranslation("Neptunium-236 Oxide", { zh: "镎-236 氧化物", ru: "Оксид Нептуния-236", fr: "Oxyde de neptunium 236" });
Translation.addTranslation("Neptunium-237", { zh: "镎-237", ru: "Нептуний-237", fr: "Neptunium 237" });
Translation.addTranslation("Neptunium-237 Oxide", { zh: "镎-237 氧化物", ru: "Оксид Нептуния-237", fr: "Oxyde de neptunium 237" });
Translation.addTranslation("Plutonium-238", { zh: "钚-238", ru: "Плутоний-238", fr: "Plutonium 238" });
Translation.addTranslation("Plutonium-238 Oxide", { zh: "钚-238 氧化物", ru: "Оксид Плутония-238", fr: "Oxyde de plutonium 238" });
Translation.addTranslation("Plutonium-239", { zh: "钚-239", ru: "Плутоний-239", fr: "Plutonium 239" });
Translation.addTranslation("Plutonium-239 Oxide", { zh: "钚-239 氧化物", ru: "Оксид Плутония-239", fr: "Oxyde de plutonium 239" });
Translation.addTranslation("Plutonium-241", { zh: "钚-241", ru: "Плутоний-241", fr: "Plutonium 241" });
Translation.addTranslation("Plutonium-241 Oxide", { zh: "钚-241 氧化物", ru: "Оксид Плутония-241", fr: "Oxyde de plutonium 241" });
Translation.addTranslation("Plutonium-242", { zh: "钚-242", ru: "Плутоний-242", fr: "Plutonium 242" });
Translation.addTranslation("Plutonium-242 Oxide", { zh: "钚-242 氧化物", ru: "Оксид Плутония-242", fr: "Oxyde de plutonium 242" });
Translation.addTranslation("Americium-241", { zh: "镅-241", ru: "Америций-241", fr: "Américium 241" });
Translation.addTranslation("Americium-241 Oxide", { zh: "镅-241 氧化物", ru: "Оксид Америций-241", fr: "Oxyde d'américium 241" });
Translation.addTranslation("Americium-242", { zh: "镅-242", ru: "Америций-242", fr: "Américium 242" });
Translation.addTranslation("Americium-242 Oxide", { zh: "镅-242 氧化物", ru: "Оксид Америций-242", fr: "Oxyde d'américium 242" });
Translation.addTranslation("Americium-243", { zh: "镅-243", ru: "Америций-243", fr: "Américium 243" });
Translation.addTranslation("Americium-243 Oxide", { zh: "镅-243 氧化物", ru: "Оксид Америций-243", fr: "Oxyde d'américium 243" });
Translation.addTranslation("Curium-243", { zh: "锔-243", ru: "Кюрий-243", fr: "Curium 243" });
Translation.addTranslation("Curium-243 Oxide", { zh: "锔-243 氧化物", ru: "Оксид Кюрий-243", fr: "Oxyde de curium 243" });
Translation.addTranslation("Curium-245", { zh: "锔-245", ru: "Кюрий-245", fr: "Curium 245" });
Translation.addTranslation("Curium-245 Oxide", { zh: "锔-245 氧化物", ru: "Оксид Кюрий-245", fr: "Oxyde de curium 245" });
Translation.addTranslation("Curium-246", { zh: "锔-246", ru: "Кюрий-246", fr: "Curium 246" });
Translation.addTranslation("Curium-246 Oxide", { zh: "锔-246 氧化物", ru: "Оксид Кюрий-246", fr: "Oxyde de curium 246" });
Translation.addTranslation("Curium-247", { zh: "锔-247", ru: "Кюрий-247", fr: "Curium 247" });
Translation.addTranslation("Curium-247 Oxide", { zh: "锔-247 氧化物", ru: "Оксид Кюрий-247", fr: "Oxyde de curium 247" });
Translation.addTranslation("Berkelium-247", { zh: "锫-247", ru: "Беркелий-247", fr: "Berkélium 247" });
Translation.addTranslation("Berkelium-247 Oxide", { zh: "锫-247 氧化物", ru: "Оксид Беркелий-247", fr: "Oxyde de berkélium 247" });
Translation.addTranslation("Berkelium-248", { zh: "锫-248", ru: "Беркелий-248", fr: "Berkélium 248" });
Translation.addTranslation("Berkelium-248 Oxide", { zh: "锫-248 氧化物", ru: "Оксид Беркелий-248", fr: "Oxyde de berkélium 248" });
Translation.addTranslation("Californium-249", { zh: "锎-249", ru: "Калифорний-249", fr: "Californium 249" });
Translation.addTranslation("Californium-249 Oxide", { zh: "锎-249 氧化物", ru: "Оксид Калифорний-249", fr: "Oxyde de californium 249" });
Translation.addTranslation("Californium-250", { zh: "锎-250", ru: "Калифорний-250", fr: "Californium 250" });
Translation.addTranslation("Californium-250 Oxide", { zh: "锎-250 氧化物", ru: "Оксид Калифорний-250", fr: "Oxyde de californium 250" });
Translation.addTranslation("Californium-251", { zh: "锎-251", ru: "Калифорний-251", fr: "Californium 251" });
Translation.addTranslation("Californium-251 Oxide", { zh: "锎-251 氧化物", ru: "Оксид Калифорний-251", fr: "Oxyde de californium 251" });
Translation.addTranslation("Californium-252", { zh: "锎-252", ru: "Калифорний-252", fr: "Californium 252" });
Translation.addTranslation("Californium-252 Oxide", { zh: "锎-252 氧化物", ru: "Оксид Калифорний-252", fr: "Oxyde de californium 252" });

Translation.addTranslation("Boron-10", { zh: "硼-10", ru: "Бор-10", fr: "Bore 10" });
Translation.addTranslation("Boron-11", { zh: "硼-11", ru: "Бор-11", fr: "Bore 11" });
Translation.addTranslation("Lithium-6", { zh: "锂-6", ru: "Литий-6", fr: "Lithium 6" });
Translation.addTranslation("Lithium-7", { zh: "锂-7", ru: "Литий-7", fr: "Lithium 7" });


Translation.addTranslation("Oxygen", { zh: "氧", ru: "Кислород", pt: "Oxigênio", fr: "Oxygène", de: "Sauerstoff" });
Translation.addTranslation("Hydrogen", { zh: "氢", ru: "Водород", pt: "Hidrogênio", fr: "Hydrogène", de: "Wasserstoff" });
Translation.addTranslation("Deuterium", { zh: "氘", ru: "Дейтерий", pt: "Deutério", fr: "Deutérium", de: "Deuterium" });
Translation.addTranslation("Tritium", { zh: "氚", ru: "Тритий", pt: "Trítio", fr: "Tritium", de: "Tritium" });
Translation.addTranslation("Helium-3", { zh: "氦-3", ru: "Гелий-3", pt: "Hélio-3", fr: "Hélium 3", de: "Helium-3" });
Translation.addTranslation("Helium", { zh: "氦", ru: "Гелий", pt: "Hélio", fr: "Hélium", de: "Helium" });

Translation.addTranslation("Molten Boron", { zh: "熔融硼", ru: "Расплавленный бор", fr: "Bore fondu", de: "Flüssiges Bor" });
Translation.addTranslation("Molten Boron-10", { zh: "熔融硼-10", ru: "Расплавленный бор-10", fr: "Bore 10 fondu" });
Translation.addTranslation("Molten Boron-11", { zh: "熔融硼-11", ru: "Расплавленный бор-11", fr: "Bore 11 fondu" });
Translation.addTranslation("Molten Lithium", { zh: "熔融锂", ru: "Расплавленный литий", fr: "Lithium fondu", de: "Flüssiges Lithium" });
Translation.addTranslation("Molten Lithium-6", { zh: "熔融锂-6", ru: "Расплавленный литий-6", fr: "Lithium 6 fondu" });
Translation.addTranslation("Molten Lithium-7", { zh: "熔融锂-7", ru: "Расплавленный литий-7", fr: "Lithium 7 fondu" });

Translation.addTranslation("Molten Steel", { zh: "熔融钢", ru: "Расплавленная сталь" });
Translation.addTranslation("Molten Ferroboron", { zh: "熔融硼铁合金", ru: "Ферроборный расплав", fr: "Alliage fondu de fer et de bore", de: "Flüssiges Ferrobor" });
Translation.addTranslation("Molten Tough Alloy", { zh: "熔融高强合金", ru: "Расплавленный прочный сплав", fr: "Alliage dur fondu", de: "Flüssige harte Legierung" });
Translation.addTranslation("Molten Hard Carbon", { zh: "熔融硬碳", ru: "Расплавленный твёрдый углерод", fr: "Carbone dur fondu", de: "Flüssiger harter Kohlenstoff" });

Translation.addTranslation("Liquefacted Coal", { zh: "液态煤炭", ru: "Сжиженный уголь", fr: "Charbon liquéfié" });
Translation.addTranslation("Molten Beryllium", { zh: "熔融铍", ru: "Расплавленный бериллий", pt: "Berílo", fr: "Béryllium fondu", de: "Flüssiges Beryllium" });
Translation.addTranslation("Molten Manganese", { zh: "熔融锰", ru: "Расплавленный марганец", fr: "Manganèse fondu" });
Translation.addTranslation("Molten Manganese Dioxide", { zh: "熔融二氧化锰", ru: "Расплавленный диоксид марганца", fr: "Dioxyde de manganèse fondu" });
Translation.addTranslation("Molten Sulfur", { zh: "熔融硫", ru: "Расплавленная сера", pt: "Enxofre", fr: "Soufre fondu", de: "Flüssiger Schwefel" });
// Molten Arsenic
Translation.addTranslation("Sublimated Arsenic", { zh: "砷蒸汽", ru: "Раствор мышьяка", fr: "Arsenic sublimé", de: "Flüssiges Arsenik" });

Translation.addTranslation("Liquid Helium", { zh: "液氦", ru: "Жидкий гелий", fr: "Hélium liquide" });
Translation.addTranslation("Liquid Nitrogen", { zh: "液氮", ru: "Жидкий азот", fr: "Azote liquide" });

// Translation.addTranslation("Plasma", { zh: "等离子体", ru: "Плазма", pt: "Plasma", fr: "Plasma", de: "Plasma" });
// neutron

Translation.addTranslation("Ethanol", { zh: "乙醇", ru: "Этанол", pt: "Etanol", fr: "Ethanol", de: "Ethanol" });
Translation.addTranslation("Methanol", { zh: "甲醇", ru: "Метанол", fr: "Méthanol" });

// Translation.addTranslation("RadAway", { zh: "抗辐宁", ru: "Антирад", fr: "RadAway" });
// Translation.addTranslation("Slow-Acting RadAway", { zh: "缓效抗辐宁", ru: "Метаболизированный (замедленный) антирад", fr: "RadAway lent" });

Translation.addTranslation("Fluorine", { zh: "氟", ru: "Фтор", pt: "Flúor", fr: "Fluor", de: "Fluor" });
Translation.addTranslation("Nitrogen", { zh: "氮", ru: "Азот", pt: "Nitrogênio", fr: "Azote", de: "Stickstoff" });

Translation.addTranslation("Carbon Dioxide", { zh: "二氧化碳", ru: "Углекислый газ", fr: "Dioxyde de carbone" });
Translation.addTranslation("Carbon Monoxide", { zh: "一氧化碳", ru: "Монооксид углерода", fr: "Monoxyde de carbone" });
Translation.addTranslation("Ethylene", { zh: "乙烯", ru: "Этилен", fr: "Ethylène" });

// Fluorimethane
Translation.addTranslation("Fluoromethane", { zh: "氟甲烷", ru: "Фторметан", fr: "Fluorure de méthyle" });
Translation.addTranslation("Ammonia", { zh: "氨", ru: "Аммиак", pt: "Amônia", fr: "Ammoniac", de: "Ammoniak" });
Translation.addTranslation("Oxygen Difluoride", { zh: "二氟化氧", ru: "Дифторид кислорода", pt: "Difluoreto de Oxigênio", fr: "Difluorure d'oxygène", de: "Sauerstoffdifluorid" });
Translation.addTranslation("Diborane", { zh: "乙硼烷", ru: "Диборан", pt: "Diborane", fr: "Diborane", de: "Diboran" });
Translation.addTranslation("Sulfur Dioxide", { zh: "二氧化硫", ru: "Диоксид серы", pt: "Dióxido de Enxofre", fr: "Dioxyde de soufre", de: "Schwefeldioxid" });
Translation.addTranslation("Sulfur Trioxide", { zh: "三氧化硫", ru: "Триоксид серы", pt: "Trióxido de Enxofre", fr: "Trioxyde de soufre", de: "Schwefeltrioxid" });

Translation.addTranslation("Hydrofluoric Acid", { zh: "氢氟酸", ru: "Плавиковая кислота", pt: "Ácido Hidrofluórico", fr: "Acide fluorhydrique", de: "Flusssäure" });
Translation.addTranslation("Boric Acid", { zh: "硼酸", ru: "Борная кислота", pt: "Ácido Bórico", fr: "Acide borique", de: "Borsäure" });
Translation.addTranslation("Sulfuric Acid", { zh: "硫酸", ru: "Серная кислота", pt: "Ácido Sulfúrico", fr: "Acide sulfurique", de: "Schwefelsäure" });

Translation.addTranslation("Boron Nitride Solution", { zh: "氮化硼溶液", ru: "Раствор нитрида бора", pt: "Solução de Nitrido de Boro", fr: "Solution de nitrure de bore", de: "Bornitridlösung" });
Translation.addTranslation("Fluorite Water", { zh: "氟石溶液", ru: "Флюоритовая вода", pt: "Fluorita em Água", fr: "Eau enrichie en fluorite", de: "Fluorwasser" });
Translation.addTranslation("Calcium Sulfate Solution", { zh: "硫酸钙溶液", ru: "Раствор сульфата кальция", pt: "Solução de Sulfato de Cálcio", fr: "Solution de sulfate de calcium", de: "Calciumsulfatlösung" });
Translation.addTranslation("Sodium Fluoride Solution", { zh: "氟化钠溶液", ru: "Раствор фторида натрия", fr: "Solution de fluorure de sodium", de: "Natriumfluoridlösung" });
Translation.addTranslation("Potassium Fluoride Solution", { zh: "氟化钾溶液", ru: "Раствор фторида калия", fr: "Solution de fluorure de potassium", de: "Kaliumfluoridlösung" });
Translation.addTranslation("Sodium Hydroxide Solution", { zh: "氢氧化钠溶液", ru: "Раствор гидроксида натрия", fr: "Solution d'hydroxyde de sodium", de: "Natriumhydroxidlösung" });
Translation.addTranslation("Potassium Hydroxide Solution", { zh: "氢氧化钾溶液", ru: "Раствор гидроксида калия", fr: "Solution d'hydroxyde de potassium", de: "Kaliumhydroxidlösung" });
Translation.addTranslation("Borax Solution", { zh: "硼砂溶液", ru: "Раствор буры", fr: "Solution de borax" });

Translation.addTranslation("Molten Lithium Fluoride", { zh: "熔融氟化锂", ru: "Расплавленный фторид лития", pt: "Fluoreto de Lítio", fr: "Fluorure de lithium fondue", de: "Flüssiges Lithiumfluorid" });
Translation.addTranslation("Molten Beryllium Fluoride", { zh: "熔融氟化铍", ru: "Расплавленный фторид бериллия", pt: "Fluoreto de Berílio", fr: "Fluorure de béryllium fondue", de: "Flüssiges Berylliumfluorid" });
Translation.addTranslation("Molten FLiBe Salt Mixture", { zh: "熔融氟锂铍盐混合物", ru: "Расплав FLiBe", pt: "Sais de FLiBe", fr: "Solution de FLiBe fondue", de: "Flüssige FLiBe Salzmischung" });
Translation.addTranslation("Molten Sodium Hydroxide", { zh: "熔融氢氧化钠", ru: "Расплавленный гидроксид натрия", fr: "Hydroxyde de sodium fondu", de: "Flüssiges Natriumhydroxid" });
Translation.addTranslation("Molten Potassium Hydroxide", { zh: "熔融氢氧化钾", ru: "Расплавленный гидроксид калия", fr: "Hydroxyde de potassium fondu", de: "Flüssiges Kaliumhydroxid" });

Translation.addTranslation("Molten Sodium", { zh: "熔融钠", ru: "Расплавленный натрий", fr: "Sodium fondu", de: "Flüssiges Natrium" });
Translation.addTranslation("Molten Potassium", { zh: "熔融钾", ru: "Расплавленный калий", fr: "Potassium fondu", de: "Flüssiges Kalium" });

Translation.addTranslation("Eutectic NaK Alloy", { zh: "共晶钠钾合金", ru: "Эвтектический натрий-калиевый сплав", fr: "Alliage eutectique NaK", de: "Eutektische NaK-Legierung" });
Translation.addTranslation("Hot Eutectic NaK Alloy", { zh: "热共晶钠钾合金", ru: "Горячий эвтектический натрий-калиевый сплав", fr: "Alliage eutectique NaK chaud", de: "Heiße eutektische NaK Legierung" });

Translation.addTranslation("Molten Boron Arsenide", { zh: "熔融砷化硼", ru: "Расплав арсенида бора", fr: "Arséniure de bore fondue", de: "Flüssiges Borarsenid" });

// Silicon Carbide Vapor
Translation.addTranslation("Sublimated Silicon Carbide", { zh: "碳化硅蒸汽", ru: "Пары карбида кремния", fr: "Vapeur de carbure de silicium" });

Translation.addTranslation("Molten Alugentum", { zh: "熔融银铝", ru: "Расплав алюгентума", fr: "Alugentum fondu" });
Translation.addTranslation("Molten Alumina", { zh: "熔融矾土", ru: "Расплавленный глинозем", fr: "Alumine fondue" });
Translation.addTranslation("Molten Aluminum", { zh: "熔融铝", ru: "Расплавленный алюминий", fr: "Aluminium fondu" });
Translation.addTranslation("Molten Silver", { zh: "熔融银", ru: "Расплавленное серебро", fr: "Argent fondu" });

// Resonant Ender
Translation.addTranslation("Molten Ender", { zh: "谐振熔融末影珍珠", ru: "Расплавленный эндер-жемчуг", fr: "Ender fondu", de: "Flüssiges Ender" });


// Fission Fuel
// ...
// m + "min"
// s + "sec"
// Deplated ...
// FissionFuel.createWithOxide("TBU", "TBU", 144000, 60, 18);
// FissionFuel.createLowAndHigh("U233", "U-233", 64000, 144, 60);
// FissionFuel.createLowAndHigh("U235", "U-235", 72000, 120, 50);
// FissionFuel.createLowAndHigh("N236", "N-236", 102000, 90, 36);
// FissionFuel.createLowAndHigh("P239", "P-239", 92000, 105, 40);
// FissionFuel.createLowAndHigh("P241", "P-241", 60000, 165, 70);
// FissionFuel.create("MOX239", "MOX-239", 84000, 155.4, 57.5);
// FissionFuel.create("MOX241", "MOX-241", 56000, 243.6, 97.5);
// FissionFuel.createLowAndHigh("A242", "A-242", 54000, 192, 94);
// FissionFuel.createLowAndHigh("Cm243", "Cm-243", 52000, 210, 112);
// FissionFuel.createLowAndHigh("Cm245", "Cm-245", 68000, 162, 68);
// FissionFuel.createLowAndHigh("Cm247", "Cm-247", 78000, 138, 54);
// FissionFuel.createLowAndHigh("B248", "B-248", 86000, 135, 52);
// FissionFuel.createLowAndHigh("Cf249", "Cf-249", 60000, 216, 116);
// FissionFuel.createLowAndHigh("Cf251", "Cf-251", 58000, 225, 120);
// Base process time: ${FissionFuel.tickToString(fuelData.time)}
// Base power: ${fuelData.power} RF/t
// Base heat gen: ${fuelData.heat} H/t


Translation.addTranslation("Speed Upgrade", { zh: "速度升级", ru: "Обновление \"Скорость\"", pt: "Melhoria de Velocidade", fr: "Amélioration de vitesse", de: "Geschwindigkeitsupgrade" });
Translation.addTranslation("Energy Upgrade", { zh: "能量升级", ru: "Обновление \"Энергия\"", fr: "Amélioration d'énergie" });
Translation.addTranslation("Fission Reactor Casing", { zh: "裂变反应堆外壳", ru: "Корпус ядерного реактора", fr: "Caisson du réacteur à fission" });
// Transparent Fission Reactor Casing
// Reactor Cell

// Fission Cooler
// Empty Cooler
// Water Cooler
// Redstone Cooler
// Quartz Cooler
// Gold Cooler
// Glowstone Cooler
// Lapis Cooler
// Diamond Cooler
// Helium Cooler
// Enderium Cooler
// Cryotheum Cooler
// Iron Cooler
// Emerald Cooler
// Copper Cooler
// Tin Cooler
// Magnesium Cooler


// Metal Blocks
Translation.addTranslation("Copper Block", { zh: "铜块", ru: "Медный блок", pt: "Bloco de Cobre", fr: "Bloc de cuivre", de: "Kupferblock" });
Translation.addTranslation("Tin Block", { zh: "锡块", ru: "Оловянный блок", pt: "Bloco de Estanho", fr: "Bloc d'étain", de: "Zinnblock" });
Translation.addTranslation("Lead Block", { zh: "铅块", ru: "Свинцовый блок", pt: "Bloco de Chumbo", fr: "Bloc de plomb", de: "Bleiblock" });
Translation.addTranslation("Thorium Block", { zh: "钍块", ru: "Ториевый блок", pt: "Bloco de Tório", fr: "Bloc de thorium", de: "Thoriumblock" });
Translation.addTranslation("Uranium Block", { zh: "铀块", ru: "Урановый блок", pt: "Bloco de Urânio", fr: "Bloc d'uranium", de: "Uranblock" });
Translation.addTranslation("Boron Block", { zh: "硼块", ru: "Борный блок", pt: "Bloco de Boro", fr: "Bloc de bore", de: "Borblock" });
Translation.addTranslation("Lithium Block", { zh: "锂块", ru: "Литиевый блок", pt: "Bloco de Lítio", fr: "Bloc de lithium", de: "Lithiumblock" });
Translation.addTranslation("Magnesium Block", { zh: "镁块", ru: "Магниевый блок", pt: "Bloco de Magnésio", fr: "Bloc de magnésium", de: "Magnesiumblock" });
Translation.addTranslation("Graphite Block", { zh: "石墨块", ru: "Графитовый блок", pt: "Bloco de Grafite", fr: "Bloc de graphite", de: "Graphitblock" });
Translation.addTranslation("Beryllium Block", { zh: "铍块", ru: "Бериллиевый блок", pt: "Bloco de Berilo", fr: "Bloc de béryllium", de: "Berylliumblock" });
Translation.addTranslation("Zirconium Block", { zh: "锆块", ru: "Циркониевый блок", pt: "Bloco de Zircônio", fr: "Bloc de zirconium", de: "Zirkoniumblock" });
Translation.addTranslation("Manganese Block", { zh: "锰块", ru: "Марганцевый блок", fr: "Bloc de manganèse" });
Translation.addTranslation("Aluminum Block", { zh: "铝块", ru: "Алюминиевый блок", fr: "Bloc d'aluminium" });
Translation.addTranslation("Silver Block", { zh: "银块", ru: "Серебряный блок", fr: "Bloc d'argent" });
// Thorium-230 Block
Translation.addTranslation("Uranium-238 Block", { zh: "铀-238 块", ru: "Блок урана-238", fr: "Bloc d'uranium 238" });
Translation.addTranslation("Neptunium-237 Block", { zh: "镎-237 块", ru: "Блок нептуния-237", fr: "Bloc de neptunium 237" });
Translation.addTranslation("Plutonium-242 Block", { zh: "钚-242 块", ru: "Блок плутония-242", fr: "Bloc de plutonium 242" });
Translation.addTranslation("Americium-243 Block", { zh: "镅-243 块", ru: "Блок америция-243", fr: "Bloc d'américium 243" });
Translation.addTranslation("Curium-246 Block", { zh: "锔-246 块", ru: "Блок кюрия-246", fr: "Bloc de curium 246" });
Translation.addTranslation("Berkelium-247 Block", { zh: "锫-247 块", ru: "Блок беркелия-247", fr: "Bloc de berkélium 247" });
Translation.addTranslation("Californium-252 Block", { zh: "锎-252 块", ru: "Блок калифорния-252", fr: "Bloc de californium 252" });

// Ingots
Translation.addTranslation("Copper Ingot", { zh: "铜锭", ru: "Медный слиток", pt: "Lingote de Cobre", fr: "Lingot de cuivre", de: "Kupferbarren" });
Translation.addTranslation("Tin Ingot", { zh: "锡锭", ru: "Оловянный слиток", pt: "Lingote de Estanho", fr: "Lingot d'étain", de: "Zinnbarren" });
Translation.addTranslation("Lead Ingot", { zh: "铅锭", ru: "Свинцовый слиток", pt: "Lingote de Chumbo", fr: "Lingot de plomb", de: "Bleibarren" });
Translation.addTranslation("Thorium Ingot", { zh: "钍锭", ru: "Ториевый слиток", pt: "Lingote de Tório", fr: "Lingot de thorium", de: "Thoriumbarren" });
Translation.addTranslation("Uranium Ingot", { zh: "铀锭", ru: "Урановый слиток", pt: "Lingote de Urânio", fr: "Lingot d'uranium", de: "Uranbarren" });
Translation.addTranslation("Boron Ingot", { zh: "硼锭", ru: "Борный слиток", pt: "Lingote de Boro", fr: "Lingot de bore", de: "Borbarren" });
Translation.addTranslation("Lithium Ingot", { zh: "锂锭", ru: "Литиевый слиток", pt: "Lingote de Lítio", fr: "Lingot de lithium", de: "Lithiumbarren" });
Translation.addTranslation("Magnesium Ingot", { zh: "镁锭", ru: "Магниевый слиток", pt: "Lingote de Magnésio", fr: "Lingot de magnésium", de: "Magnesiumbarren" });
Translation.addTranslation("Graphite Ingot", { zh: "石墨锭", ru: "Графитовый слиток", pt: "Lingote de Grafite", fr: "Lingot de graphite", de: "Graphitbarren" });
Translation.addTranslation("Beryllium Ingot", { zh: "铍锭", ru: "Бериллиевый слиток", pt: "Lingote de Berilo", fr: "Lingot de béryllium", de: "Berylliumbarren" });
Translation.addTranslation("Zirconium Ingot", { zh: "锆锭", ru: "Циркониевый слиток", pt: "Lingote de Zircônio", fr: "Lingot de zirconium", de: "Zirkoniumbarren" });
Translation.addTranslation("Manganese Ingot", { zh: "锰锭", ru: "Марганцевый слиток", fr: "Lingot de manganèse" });
Translation.addTranslation("Aluminum Ingot", { zh: "铝锭", ru: "Алюминиевый слиток", fr: "Lingot d'aluminium" });
Translation.addTranslation("Silver Ingot", { zh: "银锭", ru: "Серебряный слиток", fr: "Lingot d'argent" });
Translation.addTranslation("Manganese Oxide Ingot", { zh: "氧化锰锭", ru: "Слиток оксида марганца", fr: "Lingot d'oxyde de manganèse" });
Translation.addTranslation("Manganese Dioxide Ingot", { zh: "二氧化锰锭", ru: "Слиток диоксида марганца", fr: "Lingot de dioxyde de manganèse" });
Translation.addTranslation("Bronze Ingot", { zh: "青铜锭", ru: "Бронзовый сплав", pt: "Liga de Bronze", fr: "Lingot de bronze", de: "Bronzelegierung" });
// Tough Alloy
Translation.addTranslation("Tough Alloy Ingot", { zh: "高强合金锭", ru: "Прочный сплав", pt: "Liga Resistente", fr: "Alliage dur", de: "Harte Legierung" });
// Hard Carbon Alloy
Translation.addTranslation("Hard Carbon Alloy Ingot", { zh: "硬碳锭", ru: "Твердый углерод", pt: "Liga de Carbono Endurecido", fr: "Alliage de carbone dur", de: "Harte Kohlenstofflegierung" });
// Magnesium Diboride Alloy
Translation.addTranslation("Magnesium Diboride Alloy Ingot", { zh: "二硼化镁锭", ru: "Сплав диборида магния", pt: "Liga de Diboreto de Magnésio", fr: "Alliage de diborure de magnésium", de: "Magnesiumdiboridlegierung" });
// Lithium Manganese Dioxide Alloy
Translation.addTranslation("Lithium Manganese Dioxide Alloy Ingot", { zh: "锂二氧化锰锭", ru: "Сплав литий-марганцевого диоксида", pt: "Liga de Dióxido de Manganês de Lítio", fr: "Alliage de dioxyde de manganèse et de lithium", de: "Lithiummangandioxidlegierung" });
Translation.addTranslation("Steel Ingot", { zh: "钢锭", ru: "Стальной сплав", pt: "Liga de Aço", fr: "Lingot d'acier", de: "Stahlbarren" });
// Ferroboron Alloy
Translation.addTranslation("Ferroboron Alloy Ingot", { zh: "硼铁合金锭", ru: "Ферроборонный сплав", pt: "Liga de Ferro-boro", fr: "Alliage de fer et de bore", de: "Ferroborlegierung" });
// Shibuichi Alloy
Translation.addTranslation("Shibuichi Alloy Ingot", { zh: "胧银合金锭", ru: "Шибуичи сплав", pt: "Liga Shibuichi", fr: "Alliage shibuichi", de: "Shibuichilegierung" });
// Tin Silver Alloy
Translation.addTranslation("Tin Silver Alloy Ingot", { zh: "锡银合金锭", ru: "Оловянно-серебряный сплав", pt: "Liga de Estanho Prateado", fr: "Alliage d'étain et d'argent", de: "Zinnsilberlegierung" });
// Lead Platinum Alloy
Translation.addTranslation("Lead Platinum Alloy Ingot", { zh: "铅铂合金锭", ru: "Свинцово-платиновый сплав", pt: "Liga de Platina com Chumbo", fr: "Alliage de platine et de plomb", de: "Bleiplatinlegierung" });
// Extreme Alloy
Translation.addTranslation("Extreme Alloy Ingot", { zh: "极限合金锭", ru: "Экстремальный сплав", fr: "Alliage extrême", de: "Extreme Legierung" });
// Thermoconducting Alloy
Translation.addTranslation("Thermoconducting Alloy Ingot", { zh: "导热合金锭", ru: "Термопроводящий сплав", fr: "Alliage thermoconducteur", de: "Wärmeleitende Legierung" });
// Zircaloy
Translation.addTranslation("Zircaloy Ingot", { zh: "锆锡合金锭", ru: "Сплав циркалоя", fr: "Lingot de zircaloy" });
// Silicon Carbide Alloy
Translation.addTranslation("Silicon Carbide Ingot", { zh: "碳化硅锭", ru: "Слиток карбида кремния", fr: "Lingot de carbure de silicium" });
// SiC-SiC Ceramic Matrix Composite
Translation.addTranslation("SiC-SiC Ceramic Matrix Composite Ingot", { zh: "碳化硅陶瓷基复合材料锭", ru: "Керамический матричный композитный сплав SIC-SIC", fr: "Composite à matrice céramique SiC-SiC" });
// HSLA Steel Alloy
Translation.addTranslation("HSLA Steel Ingot", { zh: "高强度低合金钢锭", ru: "Слиток стали HSLA", fr: "Lingot d'acier faiblement allié à haute résistance" });
// Enderium Ingot

// Dusts
Translation.addTranslation("Copper Dust", { zh: "铜粉", ru: "Медная пыль", pt: "Pó de Cobre", fr: "Poudre de cuivre", de: "Kupferstaub" });
Translation.addTranslation("Tin Dust", { zh: "锡粉", ru: "Оловянная пыль", pt: "Pó de Estanho", fr: "Poudre d'étain", de: "Zinnstaub" });
Translation.addTranslation("Lead Dust", { zh: "铅粉", ru: "Свинцовая пыль", pt: "Pó de Chumbo", fr: "Poudre de plomb", de: "Bleistaub" });
Translation.addTranslation("Thorium Dust", { zh: "钍粉", ru: "Ториевая пыль", pt: "Pó de Tório", fr: "Poudre de thorium", de: "Thoriumstaub" });
Translation.addTranslation("Uranium Dust", { zh: "铀粉", ru: "Урановая пыль", pt: "Pó de Urânio", fr: "Poudre d'uranium", de: "Uranstaub" });
Translation.addTranslation("Boron Dust", { zh: "硼粉", ru: "Борная пыль", pt: "Pó de Boro", fr: "Poudre de bore", de: "Borstaub" });
Translation.addTranslation("Lithium Dust", { zh: "锂粉", ru: "Литиевая пыль", pt: "Pó de Lítio", fr: "Poudre de lithium", de: "Lithiumstaub" });
Translation.addTranslation("Magnesium Dust", { zh: "镁粉", ru: "Магниевая пыль", pt: "Pó de Magnésio", fr: "Poudre de magnésium", de: "Magnesiumstaub" });
Translation.addTranslation("Graphite Dust", { zh: "石墨粉", ru: "Графитовая пыль", pt: "Pó de Grafite", fr: "Poudre de graphite", de: "Graphitstaub" });
Translation.addTranslation("Beryllium Dust", { zh: "铍粉", ru: "Бериллиевая пыль", pt: "Pó de Berilo", fr: "Poudre de béryllium", de: "Berylliumstaub" });
Translation.addTranslation("Zirconium Dust", { zh: "锆粉", ru: "Циркониевая пыль", pt: "Pó de Zircônio", fr: "Poudre de zirconium", de: "Zirkoniumstaub" });
Translation.addTranslation("Manganese Dust", { zh: "锰粉", ru: "Марганцевая пыль", fr: "Poudre de manganèse" });
Translation.addTranslation("Aluminum Dust", { zh: "铝粉", ru: "Алюминиевая пыль", fr: "Poudre d'aluminium" });
Translation.addTranslation("Silver Dust", { zh: "银粉", ru: "Серебряная пыль", fr: "Poudre d'argent" });
Translation.addTranslation("Manganese Oxide Dust", { zh: "氧化锰粉", ru: "Пыль оксида марганца", fr: "Poudre d'oxyde de manganèse" });
Translation.addTranslation("Manganese Dioxide Dust", { zh: "二氧化锰粉", ru: "Пыль диоксида марганца", fr: "Poudre de dioxyde de manganèse" });
Translation.addTranslation("Crushed Diamond", { zh: "钻石粉末", ru: "Дроблёный алмаз", pt: "Diamante Moído", fr: "Diamant broyé", de: "Zerkleinerter Diamant" });
Translation.addTranslation("Crushed Rhodochrosite", { zh: "菱锰粉末", ru: "Дроблёный родохрозит", pt: "Rodocrosita Moída", fr: "Rhodochrosite broyée", de: "Zerkleinerter Rhodochrosit" });
Translation.addTranslation("Crushed Quartz", { zh: "石英粉末", ru: "Дроблёный кварц", pt: "Quartzo Moído", fr: "Quartz broyé", de: "Zerkleinerter Quarz" });
Translation.addTranslation("Crushed Obsidian", { zh: "黑曜石粉末", ru: "Дроблёный обсидиан", pt: "Obsidiana Moída", fr: "Obsidienne broyée", de: "Zerkleinerter Quarz" });
Translation.addTranslation("Hexagonal Boron Nitride", { zh: "六方氮化硼", ru: "Шестиугольный нитрид бора", pt: "Nitrido de Boro Amorfo", fr: "Nitrure de bore hexagonale", de: "Hexagonales Bornitrid" });
Translation.addTranslation("Crushed Fluorite", { zh: "氟石粉末", ru: "Дроблёный флюорит", pt: "Fluorita Moída", fr: "Fluorite broyée", de: "Zerkleinerter Fluorid" });
Translation.addTranslation("Sulfur", { zh: "硫磺", ru: "Сера", pt: "Enxofre", fr: "Soufre", de: "Schwefel" });
Translation.addTranslation("Crushed Coal", { zh: "煤炭粉末", ru: "Дроблёный уголь", fr: "Charbon broyé", de: "Zerkleinerte Kohle" });
Translation.addTranslation("Crushed Villiaumite", { zh: "氟盐粉末", ru: "Дроблёный виллиомит", fr: "Villiaumite broyée", de: "Zerkleinerter Villiaumit" });
Translation.addTranslation("Crushed Carobbiite", { zh: "方氟钾石粉末", ru: "Дроблёный кароббиит", fr: "Carobbiite broyée", de: "Zerkleinerter Carobbiit" });
Translation.addTranslation("Crushed Arsenic", { zh: "砷粉末", ru: "Дроблёный мышьяк", fr: "Arsenic broyé", de: "Zerkleinertes Arsenik" });
Translation.addTranslation("Crushed End Stone", { zh: "末地石粉末", ru: "Дроблёный эндерняк", fr: "Pierre de l'end broyée" });

// Gem
Translation.addTranslation("Rhodochrosite", { zh: "菱锰", ru: "Родохрозит", pt: "Rodocrosita", fr: "Rhodochrosite", de: "Rhodochrosit" });
Translation.addTranslation("Cubic Boron Nitride", { zh: "立方氮化硼", ru: "Кубический нитрид бора", pt: "Nitrido de Boro Cúbico", fr: "Nitrure de bore cubique", de: "Kubisches Bornitrid" });
Translation.addTranslation("Fluorite", { zh: "氟石", ru: "Флюорит", pt: "Fluorita", fr: "Fluorite", de: "Fluorit" });
Translation.addTranslation("Villiaumite", { zh: "氟盐", ru: "Виллиомит", fr: "Villiaumite", de: "Villiaumit" });
Translation.addTranslation("Carobbiite", { zh: "方氟钾石", ru: "Кароббиит", fr: "Carobbiite", de: "Carobbiit" });
Translation.addTranslation("Boron Arsenide", { zh: "砷化硼", ru: "Арсенид бора", fr: "Arséniure de bore", de: "Borarsenid" });
Translation.addTranslation("Silicon", { zh: "硅", ru: "Кремний", fr: "Silicium" });

// Compound
Translation.addTranslation("Calcium Sulfate", { zh: "硫酸钙", ru: "Сульфат кальция", pt: "Sulfato de Cálcio", fr: "Sulfate de calcium", de: "Calciumsulfat" });
Translation.addTranslation("Crystal Binder", { zh: "晶体粘合剂", ru: "Кристаллический связующий элемент", pt: "Cristal Isolante", fr: "Liant de cristal", de: "Kristallbinder" });
Translation.addTranslation("Energetic Blend", { zh: "充能混合物", ru: "Энергетическая смесь", fr: "Mélange énergétique", de: "Energische Mischung" });
Translation.addTranslation("Sodium Fluoride", { zh: "氟化钠", ru: "Фторид натрия", fr: "Fluorure de sodium", de: "Natriumfluorid" });
Translation.addTranslation("Potassium Fluoride", { zh: "氟化钾", ru: "Фторид калия", fr: "Fluorure de potassium", de: "Kaliumfluorid" });
Translation.addTranslation("Sodium Hydroxide", { zh: "氢氧化钠", ru: "Гидроксид натрия", fr: "Hydroxyde de sodium", de: "Natriumhydroxid" });
Translation.addTranslation("Potassium Hydroxide", { zh: "氢氧化钾", ru: "Гидроксид калия", fr: "Hydroxyde de potassium", de: "Kaliumhydroxid" });
Translation.addTranslation("Borax", { zh: "硼砂", ru: "Бура", fr: "Borax" });
Translation.addTranslation("Dimensional Blend", { zh: "维度混合物", ru: "Размерная смесь", fr: "Mélange dimensionnel" });
Translation.addTranslation("Carbon-Manganese Blend", { zh: "碳锰混合物", ru: "Углеродно-марганцевая смесь", fr: "Mélange de carbone et de manganèse" });
Translation.addTranslation("Alugentum Dust", { zh: "银铝粉", ru: "Алюгентовая пыль", fr: "Poudre d'alugentum" });


Translation.addTranslation("Basic Plating", { zh: "基础板", ru: "Базовая обшивка", pt: "Placa Básica", fr: "Placage basique", de: "Einfache Platte" });
Translation.addTranslation("Advanced Plating", { zh: "高级板", ru: "Улучшенная обшивка", pt: "Placa Avançada", fr: "Placage avancé", de: "Fortgeschrittene Platte" });
Translation.addTranslation("DU Plating", { zh: "贫铀板", ru: "ДУ обшивка", pt: "Placa de Urânio", fr: "Placage DU", de: "DU Platte" });
Translation.addTranslation("Elite Plating", { zh: "精英板", ru: "Элитная обшивка", pt: "Placa Elite", fr: "Placage élite", de: "Eliteplatte" });
Translation.addTranslation("Copper Solenoid", { zh: "铜螺线管", ru: "Медный соленоид", pt: "Solenóide de Cobre", fr: "Solénoïde en cuivre", de: "Kupfersolenoid" });
Translation.addTranslation("Magnesium Diboride Solenoid", { zh: "二硼化镁螺线管", ru: "Соленоид из диборида магния", pt: "Solenóide de Diboreto de Magnésio", fr: "Solénoïde en diborure de magnésium", de: "Magnesiumdiboridsolenoid" });
Translation.addTranslation("Bioplastic", { zh: "生物塑料", ru: "Биопластик", pt: "Bioplástico", fr: "Bioplastique", de: "Bioplastik" });
Translation.addTranslation("Servomechanism", { zh: "伺服系统", ru: "Сервомеханизм", fr: "Servomécanisme", de: "Servomechanismus" });
Translation.addTranslation("Electric Motor", { zh: "电动马达", ru: "Электродвигатель", fr: "Moteur électrique", de: "Elektromotor" });
Translation.addTranslation("Linear Actuator", { zh: "线性执行器", ru: "Линейный привод", fr: "Actionneur linéaire", de: "Linearer Auslöser" });
Translation.addTranslation("Lithium Ion Cell", { zh: "锂离子电池", ru: "Литий-ионная ячейка", fr: "Batterie lithium-ion", de: "Lithium-Ionen Akku" });

Translation.addTranslation("Machine Chassis", { zh: "机器框架", ru: "Шасси машины", fr: "Chassis de machine", de: "Maschinengehäuse" });
Translation.addTranslation("Empty Frame", { zh: "空框架", ru: "Пустая рамка", fr: "Cadre de machine vide", de: "Leerer Rahmen" });
// Steel Frame
Translation.addTranslation("Steel Chassis", { zh: "钢框架", ru: "Стальная рамка", fr: "Chassis de machine en acier" });
