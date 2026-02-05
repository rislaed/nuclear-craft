// Processor Machine
Translation.addTranslation("Manufactory", { zh: "小制造机", ru: "Мануфактура", fr: "Fabrique" });
Translation.addTranslation("Isotope Separator", { zh: "同位素分离器", ru: "Изотопный сепаратор", pt: "Separador de Isótopos", de: "Isotopenseparator" });
Translation.addTranslation("Separator", { zh: "分离器", ru: "Сепаратор", fr: "Séparateur" });
Translation.addTranslation("Decay Hastener", { zh: "衰变加速器", ru: "Ускоритель распада", fr: "Accélérateur de désintégration" });
Translation.addTranslation("Fuel Reprocessor", { zh: "燃料再处理机", ru: "Топливный сепаратор", fr: "Retraiteur de combustible atomique" });
Translation.addTranslation("Alloy Furnace", { zh: "合金炉", ru: "Сплавная печь", fr: "Four à alliage" });
Translation.addTranslation("Fluid Infuser", { zh: "流体注入器", ru: "Впрыскиватель", fr: "Infuseur de fluide" });
Translation.addTranslation("Melter", { zh: "熔化机", ru: "Плавильня", fr: "Four à fusion" });
Translation.addTranslation("Supercooler", { zh: "超冷却机", ru: "Суперохладитель", fr: "Surfondeur" });
Translation.addTranslation("Electrolyzer", { zh: "电解池", ru: "Электролизёр", fr: "Electrolyseur" });
Translation.addTranslation("Neutron Irradiator", { zh: "中子辐照器", ru: "Нейтронный облучатель", pt: "Irradiador de Neutrons", de: "Neutronenirritierer" });
Translation.addTranslation("Ingot Former", { zh: "冷却器", ru: "Литейный тигель", fr: "Moule à lingots" });
Translation.addTranslation("Pressurizer", { zh: "压缩机", ru: "Компрессор", fr: "Pressuriseur" });
Translation.addTranslation("Chemical Reactor", { zh: "化学反应器", ru: "Химический реактор", fr: "Réacteur chimique" });
Translation.addTranslation("Salt Mixer", { zh: "盐混器", ru: "Солевой смеситель", pt: "Misturador de Sais", de: "Salzmixer" });
Translation.addTranslation("Crystallizer", { zh: "结晶器", ru: "Кристаллизатор", fr: "Cristalliseur" });
Translation.addTranslation("Fluid Enricher", { zh: "溶解器", ru: "Обогатитель жидкости", fr: "Enrichisseur de fluides" });
Translation.addTranslation("Fluid Extractor", { zh: "流体提取器", ru: "Экстрактор жидкости", fr: "Extracteur de fluide" });
Translation.addTranslation("Centrifuge", { zh: "离心机", ru: "Центрифуга", fr: "Centrifugeuse" });
Translation.addTranslation("Rock Crusher", { zh: "岩石粉碎机", ru: "Камнедробилка", fr: "Pulvérisateur de rochers" });


Translation.addTranslation("Fission Reactor", { zh: "裂变反应堆", ru: "Реактор деления", pt: "Reator de Fissão", de: "Spaltungsreaktor" });
// Base depletion time: ${FissionFuel.tickToString(params.time)}
Translation.addTranslation("Base Depletion Time: %s", { zh: "基础衰竭时间：%s", ru: "Базовое время отработки: %s", fr: "Temps de déterioration de base: %s" });
// Base power gen: ${params.power} RF/t
// Base heat gen: ${params.heat} H/t
Translation.addTranslation("Base Heat Gen: %s", { zh: "基础产热：%s", ru: "Базовое тепловыделение: %s", fr: "Génération de chaleur de base: %s" });


Translation.addTranslation("Decay Generator", { zh: "衰变产能器", ru: "Генератор распада", pt: "Gerador Apodrecedor", fr: "Générateur à désintégration", de: "Zerfallsgenerator" });
// Math.ceil(data.lifetime / 60) + " min"
// data.lifetime + " s"
// Mean lifetime: ${time}
Translation.addTranslation("Mean Lifetime:", { zh: "平均寿命：", ru: "Период полураспада:", fr: "Temps de vie moyen:" });
// Power gen: ${data.power} RF/s
Translation.addTranslation("Power Gen:", { zh: "产能：", ru: "Генерация энергии:", fr: "Génération d'énergie:" });

// Nuclear Furnace Fuel
Translation.addTranslation("Fuel", { ru: "Топливо", de: "Brennstoff" });
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
Translation.addTranslation("Energy Stored:", { zh: "储能：", ru: "Запас энергии:", fr: "Energie enmagasinée:" });


Translation.addTranslation("Fission Controller", { zh: "裂变控制器", ru: "Контроллер деления", pt: "Controlador de Fissão", de: "Spaltungsregeler" });
// [this.networkData.getInt("statSizeX"), this.networkData.getInt("statSizeY"), this.networkData.getInt("statSizeZ")].join("x") + " Fission Reactor"
// "Cells: " + status.cells
Translation.addTranslation("Cells:", { zh: "单元数:", ru: "Ячейки:", pt: "Células:", de: "Zellen:" });
// fuelData ? fuelData.name : "No Fuel"
Translation.addTranslation("No Fuel", { zh: "没有燃料", ru: "Нет топливо", pt: "Sem Combustível", de: "Kein Brennstoff" });
// status.power + " RF/t"
// (status.cooling > 0 ? status.heat + " - " + status.cooling + " = " : "") + (status.heat - status.cooling) + " H/t"


// Fission Cooler
Translation.addTranslation("Empty Cooler", { zh: "空的冷却器", ru: "Пустой охладитель", pt: "Resfriador Vazio", de: "Leerer Kühler" });
Translation.addTranslation("Water Cooler", { zh: "水冷器", ru: "Водяной охладитель", pt: "Resfriador à Água", de: "Wasserkühler" });
Translation.addTranslation("Must be adjacent to at least one Reactor Cell or active moderator block.", { zh: "必须接触至少一个反应单元或一个减速剂方块.", ru: "Должен коснуться хотя бы одной ячейки реактора или активного блока модератора.", pt: "Deve tocar ao menos uma estrutura de reator.", de: "Muss mindestens eine Reaktorzelle oder einen aktiven Moderatorblock berühren." });
Translation.addTranslation("Redstone Cooler", { zh: "红石冷却器", ru: "Редстоуновый охладитель", pt: "Resfriador à Redstone", de: "Redstone Cooler" });
Translation.addTranslation("Must be adjacent to at least one Reactor Cell.", { zh: "必须接触至少一个反应堆单元.", ru: "Необходимо коснуться хотя бы одной ячейки реактора.", pt: "Deve tocar ao menos uma célula de reator.", de: "Muss mindestens eine Reaktorzelle berühren." });
Translation.addTranslation("Quartz Cooler", { zh: "石英冷却器", ru: "Кварцевый охладитель", pt: "Resfriador à Quartzo", de: "Quarzkühler" });
Translation.addTranslation("Must be adjacent to at least one active moderator block.", { zh: "必须接触至少一个有效的减速剂方块.", ru: "Должен коснуться хотя бы одного активного блока модератора.", pt: "Deve tocar ao menos um bloco de grafite ativo.", de: "Muss mindestens einen aktiven Moderatorblock berühren." });
Translation.addTranslation("Gold Cooler", { zh: "金冷却器", ru: "Золотой охладитель", pt: "Resfriador à Ouro", de: "Goldkühler" });
Translation.addTranslation("Must be adjacent to at least one valid Water Cooler and one valid Redstone Cooler.", { zh: "必须接触至少一个水冷器和一个红石冷却器.", ru: "Должен коснуться хотя бы одного активного водяного охладителя и одного активного охладителя редстоуна.", pt: "Deve tocar ao menos um resfriador à água ativo, e um resfriador à redstone.", de: "Muss mindestens einen aktiven Wasserkühler und einen aktiven Redstonekühler berühren." });
Translation.addTranslation("Glowstone Cooler", { zh: "萤石冷却器", ru: "Охладитель из светопыли", pt: "Resfriador à Pedra Luminosa", de: "Glowstonekühler" });
Translation.addTranslation("Must be adjacent to at least two active moderator blocks.", { zh: "必须接触至少两个有效的减速剂方块.", ru: "Должен касаться как минимум двух активных блоков модератора.", pt: "Deve tocar ao menos dois blocos de grafite ativos.", de: "Muss mindestens zwei aktive Moderatorblöcke berühren." });
Translation.addTranslation("Lapis Cooler", { zh: "青金石冷却器", ru: "Лазуритовый охладитель", pt: "Resfriador à Lápis-Lazúli", de: "Lapislazulikühler" });
Translation.addTranslation("Must be adjacent to at least one Reactor Cell and one Reactor Casing.", { zh: "必须接触至少一个反应堆单元和一个反应堆外壳.", ru: "Должен коснуться хотя бы одной ячейки реактора и одного корпуса реактора.", pt: "Deve tocar ao menos uma célula de reator e uma estrutura de reator.", de: "Muss mindestens eine Reaktorzelle und ein Reaktorgehäuse berühren." });
Translation.addTranslation("Diamond Cooler", { zh: "钻石冷却器", ru: "Алмазный охладитель", pt: "Resfriador à Diamante", de: "Diamantkühler" });
Translation.addTranslation("Must be adjacent to at least one valid Water Cooler and one valid Quartz Cooler.", { zh: "必须接触至少两个水冷器和至少一个石英冷却器.", ru: "Должен коснуться как минимум двух активных водяных охладителей и одного активного кварцевого охладителя.", pt: "Deve tocar ao menos quatro resfriadores à água que estejam no mesmo nível.", de: "Muss mindestens zwei aktive Wasserkühler und einen aktiven Quarzkühler berühren." });
// Helium Cooler
Translation.addTranslation("Liquid Helium Cooler", { zh: "液氦冷却器", ru: "Жидкий гелиевый охладитель", pt: "Resfriador à Hélio Líquido", de: "Flüssigheliumkühler" });
Translation.addTranslation("Must be adjacent to exactly one valid Redstone Cooler and at least one Reactor Casing.", { zh: "必须接触恰好一个红石冷却器和至少一个反应堆外壳.", ru: "Необходимо коснуться только одного активного охладителя редстоуна и, по крайней мере, одного корпуса реактора.", pt: "Deve tocar ao menos um resfriador à quartzo ativo e uma estrutura de reator.", de: "Muss genau einen aktiven Redstonekühler und mindestens ein Reaktorgehäuse berühren." });
Translation.addTranslation("Enderium Cooler", { zh: "末影冷却器", ru: "Эндериумовый охладитель", pt: "Resfriador à Endério", de: "Enderiumkühler" });
Translation.addTranslation("Must be adjacent to exactly three Reactor Casings at exactly one vertex.", { zh: "必须接触三个反应堆外壳.", ru: "Должно касаться ровно трех корпусов реакторов ровно на одну вершину.", pt: "Deve tocar ao menos três estruturas de reator.", de: "Muss genau 3 Reaktorgehäuse in einer Ecke berühren." });
Translation.addTranslation("Cryotheum Cooler", { zh: "凛冰冷却器", ru: "Криотеумовый охладитель", pt: "Resfriador à Crióteum", de: "Kryotheumkühler" });
Translation.addTranslation("Must be adjacent to at least two Reactor Cells.", { zh: "必须接触至少两个反应堆单元.", ru: "Должен касаться, по крайней мере, двух реакторных ячеек.", pt: "Deve tocar ao menos duas células de reator.", de: "Muss mindestens zwei Reaktorzellen berühren." });
Translation.addTranslation("Iron Cooler", { zh: "铁冷却器", ru: "Железный охладитель", pt: "Resfriador de Ferro", de: "Eisenkühler" });
Translation.addTranslation("Must be adjacent to at least one valid Gold Cooler.", { zh: "必须接触至少一个金冷却器.", ru: "Должен коснуться хотя бы одного активного золотого охладителя.", pt: "Deve tocar ao menos um resfriador à ouro ativo.", de: "Muss mindestens einen aktiven Goldkühler berühren." });
Translation.addTranslation("Emerald Cooler", { zh: "绿宝石冷却器", ru: "Изумрудный охладитель", pt: "Resfriador de Esmeralda", de: "Smaragdkühler" });
Translation.addTranslation("Must be adjacent to at least one active moderator block and one Reactor Cell.", { zh: "必须接触至少一个有效的减速剂方块和一个反应堆单元.", ru: "Необходимо коснуться хотя бы одного активного блока модератора и одной ячейки реактора.", pt: "Deve tocar ao menos um bloco de grafite ativo e uma célula de reactor.", de: "Muss mindestens einen aktiven Moderatorblock und eine Reaktorzelle berühren." });
Translation.addTranslation("Copper Cooler", { zh: "铜冷却器", ru: "Медный охладитель", pt: "Resfriador de Cobre", de: "Kupferkühler" });
Translation.addTranslation("Must be adjacent to at least one valid Glowstone Cooler.", { zh: "必须接触至少一个萤石冷却器.", ru: "Необходимо коснуться хотя бы одного активного охладителя из светопыли.", pt: "Deve tocar ao menos um resfriador à pedra luminosa ativo.", de: "Muss mindestens einen aktiven Glowstonekühler berühren." });
Translation.addTranslation("Tin Cooler", { zh: "锡冷却器", ru: "Оловянный охладитель", pt: "Resfriador de Estanho", de: "Zinnkühler" });
Translation.addTranslation("Must be adjacent to at least two valid Lapis Coolers along a common axis.", { zh: "必须在两个青金石冷却器之间.", ru: "Должна быть по крайней мере между двумя активными лазуритовыми охладителями по одной оси.", pt: "Deve estar ao menos entre dois resfriadores à Lápis-Lazúli ativos, com um no lado oposto do outro.", de: "Muss mindestens zwischen zwei aktiven Lapislazulikühlern auf der selben Achse sein." });
Translation.addTranslation("Magnesium Cooler", { zh: "镁冷却器", ru: "Магниевый охладитель", pt: "Resfriador de Magnésio", de: "Magnesiumkühler" });
Translation.addTranslation("Must be adjacent to at least one Reactor Casing and one active moderator block.", { zh: "必须接触至少一个反应堆外壳和一个减速剂方块.", ru: "Необходимо коснуться хотя бы одного корпуса реактора и одного активного блока модератора.", pt: "Deve tocar ao menos um bloco de estrutura de reator e um resfriador à Hélio Líquido ativo.", de: "Muss mindestens ein Reaktorgehäuse und einen aktiven Moderatorblock berühren." });


// "Cooling rate: " + coolerData.cooling + "H/t"
Translation.addTranslation("Cooling Rate:", { zh: "冷却速率：", ru: "Скорость охлаждения:", fr: "Vitesse de refroidissement:" });
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
Translation.addTranslation("Helium Collector", { zh: "氦收集器", ru: "Гелиевый сборщик", pt: "Coletor de Hélio", de: "Heliumsammler" });
Translation.addTranslation("Compact Helium Collector", { zh: "压缩氦收集器", ru: "Компактный сборщик гелия", pt: "Coletor de Hélio Compacto", de: "Kompakter Heliumsammler" });
Translation.addTranslation("Dense Helium Collector", { zh: "致密氦收集器", ru: "Плотный сборщик гелия", pt: "Coletor de Hélio Denso", de: "Dichter Heliumsammler" });
Translation.addTranslation("Nitrogen Collector", { zh: "氮收集器", ru: "Азотный сборщик", pt: "Coletor de Nitrogênio", fr: "Collecteur d'azote", de: "Stickstoffsammler" });
Translation.addTranslation("Compact Nitrogen Collector", { zh: "压缩氮收集器", ru: "Компактный сборщик азота", pt: "Coletor de Nitrogênio Compacto", fr: "Collecteur d'azote compacte", de: "Kompakter Stickstoffsammler" });
Translation.addTranslation("Dense Nitrogen Collector", { zh: "致密氮收集器", ru: "Плотный сборщик азота", pt: "Coletor de Nitrogênio Denso", fr: "Collecteur d'azote dense", de: "Dichter Stickstoffsammler" });


Translation.addTranslation("Nuclear Furnace", { zh: "核熔炉", ru: "Ядерная печь", fr: "Four nucléaire" });


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
Translation.addTranslation("Thorium-230", { zh: "钍-230", ru: "Торий-230", pt: "Tório-230", de: "Thorium-230" });
Translation.addTranslation("Thorium-230 Oxide", { zh: "氧化钍-230", ru: "Оксид Тория-230", pt: "Óxido de Tório-230", de: "Thorium-230 Oxid" });
Translation.addTranslation("Tiny Clump of Thorium-230", { zh: "小撮钍-230", ru: "Крошечный комок Тория-230", pt: "Pequeno Amontoado de Tório-230", de: "Kleiner Thorium-230 Klumpen" });
Translation.addTranslation("Tiny Clump of Thorium-230 Oxide", { zh: "小撮氧化钍-230", ru: "Крошечный комок оксида Тория-230", pt: "Pequeno Amontoado de Óxido de Tório-230", de: "Kleiner Thorium-230 Oxid Klumpen" });
Translation.addTranslation("Thorium-232", { zh: "钍-232", ru: "Торий-232", pt: "Tório-232", de: "Thorium-232" });
Translation.addTranslation("Thorium-232 Oxide", { zh: "氧化钍-232", ru: "Оксид Тория-232", pt: "Óxido de Tório-232", de: "Thorium-232 Oxid" });
Translation.addTranslation("Tiny Clump of Thorium-232", { zh: "小撮钍-232", ru: "Крошечный комок Тория-232", pt: "Pequeno Amontoado de Tório-232", de: "Thorium-232 Oxid Klumpen" });
Translation.addTranslation("Tiny Clump of Thorium-232 Oxide", { zh: "小撮氧化钍-232", ru: "Крошечный комок оксида Тория-232", pt: "Pequeno Amontoado de Óxido de Tório-232", de: "Kleiner Thorium-232 Oxid Klumpen" });
Translation.addTranslation("Uranium-233", { zh: "铀-233", ru: "Уран-233", fr: "Uranium 233" });
Translation.addTranslation("Uranium-233 Oxide", { zh: "铀-233 氧化物", ru: "Оксид Урана-233", fr: "Oxyde d'uranium 233" });
Translation.addTranslation("Tiny Clump of Uranium-233", { zh: "小撮铀-233", ru: "Крошечный комок Урана-233", pt: "Pequeno Amontoado de Urânio-233", de: "Kleiner Uran-233 Klumpen" });
Translation.addTranslation("Tiny Clump of Uranium-233 Oxide", { zh: "小撮氧化铀-233", ru: "Крошечный комок оксида Урана-233", pt: "Pequeno Amontoado de Óxido de Urânio-233", de: "Kleiner Uran-233 Oxid Klumpen" });
Translation.addTranslation("Uranium-235", { zh: "铀-235", ru: "Уран-235", fr: "Uranium 235" });
Translation.addTranslation("Uranium-235 Oxide", { zh: "铀-235 氧化物", ru: "Оксид Урана-235 ", fr: "Oxyde d'uranium 235" });
Translation.addTranslation("Tiny Clump of Uranium-235", { zh: "小撮铀-235", ru: "Крошечный комок Урана-235", pt: "Pequeno Amontoado de Urânio-235", de: "Kleiner Uranium-235 Klumpen" });
Translation.addTranslation("Tiny Clump of Uranium-235 Oxide", { zh: "小撮氧化铀-235 ", ru: "Крошечный комок оксида Урана-235", pt: "Pequeno Amontoado de Óxido de Urânio-235", de: "Kleiner Uran-235 Oxid Klumpen" });
Translation.addTranslation("Uranium-238", { zh: "铀-238", ru: "Уран-238", fr: "Uranium 238" });
Translation.addTranslation("Uranium-238 Oxide", { zh: "铀-238 氧化物", ru: "Оксид Урана-238 ", fr: "Oxyde d'uranium 238" });
Translation.addTranslation("Tiny Clump of Uranium-238", { zh: "小撮铀-238", ru: "Крошечный комок Урана-238", pt: "Pequeno Amontoado de Urânio-238", de: "Kleiner Uran-238 Klumpen" });
Translation.addTranslation("Tiny Clump of Uranium-238 Oxide", { zh: "小撮氧化铀-238", ru: "Крошечный комок оксида Урана-238", pt: "Pequeno Amontoado de Óxido de Urânio-238", de: "Kleiner Uran-238 Oxid Klumpen" });
Translation.addTranslation("Neptunium-236", { zh: "镎-236", ru: "Нептуний-236", fr: "Neptunium 236" });
Translation.addTranslation("Neptunium-236 Oxide", { zh: "镎-236 氧化物", ru: "Оксид Нептуния-236", fr: "Oxyde de neptunium 236" });
Translation.addTranslation("Tiny Clump of Neptunium-236", { zh: "小撮镎-236", ru: "Крошечный комок Нептуния-236", pt: "Pequeno Amontoado de Neptúnio-236", de: "Kleiner Neptunium-236 Klumpen" });
Translation.addTranslation("Tiny Clump of Neptunium-236 Oxide", { zh: "小撮氧化镎-236", ru: "Крошечный комок оксида Нептуния-236", pt: "Pequeno Amontoado de Óxido de Neptúnio-236", de: "Kleiner Neptunium-236 Oxid Klumpen" });
Translation.addTranslation("Neptunium-237", { zh: "镎-237", ru: "Нептуний-237", fr: "Neptunium 237" });
Translation.addTranslation("Neptunium-237 Oxide", { zh: "镎-237 氧化物", ru: "Оксид Нептуния-237", fr: "Oxyde de neptunium 237" });
Translation.addTranslation("Tiny Clump of Neptunium-237", { zh: "小撮镎-237", ru: "Крошечный комок Нептуния-237", pt: "Pequeno Amontoado de Neptúnio-237", de: "Kleiner Neptunium-237 Klumpen" });
Translation.addTranslation("Tiny Clump of Neptunium-237 Oxide", { zh: "小撮氧化镎-237", ru: "Крошечный комок оксида Нептуния-237", pt: "Pequeno Amontoado de Óxido de Neptúnio-237", de: "Kleiner Neptunium-237 Oxid Klumpen" });
Translation.addTranslation("Plutonium-238", { zh: "钚-238", ru: "Плутоний-238", fr: "Plutonium 238" });
Translation.addTranslation("Plutonium-238 Oxide", { zh: "钚-238 氧化物", ru: "Оксид Плутония-238", fr: "Oxyde de plutonium 238" });
Translation.addTranslation("Tiny Clump of Plutonium-238", { zh: "小撮钚-238", ru: "Крошечный комок Плутония-238", pt: "Pequeno Amontoado de Plutônio-238", de: "Kleiner Plutonium-238 Klumpen" });
Translation.addTranslation("Tiny Clump of Plutonium-238 Oxide", { zh: "小撮氧化钚-238", ru: "Крошечный комок оксида Плутония-238", pt: "Pequeno Amontoado de Óxido de Plutônio-238", de: "Kleiner Plutonium-238 Oxid Klumpen" });
Translation.addTranslation("Plutonium-239", { zh: "钚-239", ru: "Плутоний-239", fr: "Plutonium 239" });
Translation.addTranslation("Plutonium-239 Oxide", { zh: "钚-239 氧化物", ru: "Оксид Плутония-239", fr: "Oxyde de plutonium 239" });
Translation.addTranslation("Tiny Clump of Plutonium-239", { zh: "小撮钚-239", ru: "Крошечный комок Плутония-239", pt: "Pequeno Amontoado de Plutônio-239", de: "Kleiner Plutonium-239 Klumpen" });
Translation.addTranslation("Tiny Clump of Plutonium-239 Oxide", { zh: "小撮氧化钚-239", ru: "Крошечный комок оксида Плутония-239", pt: "Pequeno Amontoado de Óxido de Plutônio-239", de: "Kleiner Plutonium-239 Oxid Klumpen" });
Translation.addTranslation("Plutonium-241", { zh: "钚-241", ru: "Плутоний-241", fr: "Plutonium 241" });
Translation.addTranslation("Plutonium-241 Oxide", { zh: "钚-241 氧化物", ru: "Оксид Плутония-241", fr: "Oxyde de plutonium 241" });
Translation.addTranslation("Tiny Clump of Plutonium-241", { zh: "小撮钚-241", ru: "Крошечный комок Плутония-241", pt: "Pequeno Amontoado de Plutônio-241", de: "Kleiner Plutonium-241 Klumpen" });
Translation.addTranslation("Tiny Clump of Plutonium-241 Oxide", { zh: "小撮氧化钚-241", ru: "Крошечный комок оксида Плутония-241", pt: "Pequeno Amontoado de Óxido de Plutônio-241", de: "Kleiner Plutonium-241 Oxid Klumpen" });
Translation.addTranslation("Plutonium-242", { zh: "钚-242", ru: "Плутоний-242", fr: "Plutonium 242" });
Translation.addTranslation("Plutonium-242 Oxide", { zh: "钚-242 氧化物", ru: "Оксид Плутония-242", fr: "Oxyde de plutonium 242" });
Translation.addTranslation("Tiny Clump of Plutonium-242", { zh: "小撮钚-242", ru: "Крошечный комок Плутония-242", pt: "Pequeno Amontoado de Plutônio-242", de: "Kleiner Plutonium-242 Klumpen" });
Translation.addTranslation("Tiny Clump of Plutonium-242 Oxide", { zh: "小撮氧化钚-242", ru: "Крошечный комок оксида Плутония-242", pt: "Pequeno Amontoado de Óxido de Plutônio-242", de: "Kleiner Plutonium-242 Oxid Klumpen" });
Translation.addTranslation("Americium-241", { zh: "镅-241", ru: "Америций-241", fr: "Américium 241" });
Translation.addTranslation("Americium-241 Oxide", { zh: "镅-241 氧化物", ru: "Оксид Америций-241", fr: "Oxyde d'américium 241" });
Translation.addTranslation("Tiny Clump of Americium-241", { zh: "小撮镅-241", ru: "Крошечный комок Америция-241", pt: "Pequeno Amontoado de Amerício-241", de: "Kleiner Americium-241 Klumpen" });
Translation.addTranslation("Tiny Clump of Americium-241 Oxide", { zh: "小撮氧化镅-241", ru: "Крошечный комок оксида Америция-241", pt: "Pequeno Amontoado de Óxido de Amerício-241", de: "Kleiner Americium-241 Oxid Klumpen" });
Translation.addTranslation("Americium-242", { zh: "镅-242", ru: "Америций-242", fr: "Américium 242" });
Translation.addTranslation("Americium-242 Oxide", { zh: "镅-242 氧化物", ru: "Оксид Америций-242", fr: "Oxyde d'américium 242" });
Translation.addTranslation("Tiny Clump of Americium-242", { zh: "小撮镅-242", ru: "Крошечный комок Америция-242", pt: "Pequeno Amontoado de Amerício-242", de: "Kleiner Americium-242 Klumpen" });
Translation.addTranslation("Tiny Clump of Americium-242 Oxide", { zh: "小撮氧化镅-242", ru: "Крошечный комок оксида Америция-242", pt: "Pequeno Amontoado de Óxido de Amerício-242", de: "Kleiner Americium-242 Oxid Klumpen" });
Translation.addTranslation("Americium-243", { zh: "镅-243", ru: "Америций-243", fr: "Américium 243" });
Translation.addTranslation("Americium-243 Oxide", { zh: "镅-243 氧化物", ru: "Оксид Америций-243", fr: "Oxyde d'américium 243" });
Translation.addTranslation("Tiny Clump of Americium-243", { zh: "小撮镅-243", ru: "Крошечный комок Америция-243", pt: "Pequeno Amontoado de Amerício-243", de: "Kleiner Americium-243 Klumpen" });
Translation.addTranslation("Tiny Clump of Americium-243 Oxide", { zh: "小撮氧化镅-243", ru: "Крошечный комок оксида Америция-243", pt: "Pequeno Amontoado de Óxido de Amerício-243", de: "Kleiner Americium-243 Oxid Klumpen" });
Translation.addTranslation("Curium-243", { zh: "锔-243", ru: "Кюрий-243", fr: "Curium 243" });
Translation.addTranslation("Curium-243 Oxide", { zh: "锔-243 氧化物", ru: "Оксид Кюрий-243", fr: "Oxyde de curium 243" });
Translation.addTranslation("Tiny Clump of Curium-243", { zh: "小撮锔-243", ru: "Крошечный комок Кюрия-243", pt: "Pequeno Amontoado de Curio-243", de: "Kleiner Curium-243 Klumpen" });
Translation.addTranslation("Tiny Clump of Curium-243 Oxide", { zh: "小撮氧化锔-243", ru: "Крошечный комок оксида Кюрия-243", pt: "Pequeno Amontoado de Óxido de Curio-243", de: "Kleiner Curium-243 Oxid Klumpen" });
Translation.addTranslation("Curium-245", { zh: "锔-245", ru: "Кюрий-245", fr: "Curium 245" });
Translation.addTranslation("Curium-245 Oxide", { zh: "锔-245 氧化物", ru: "Оксид Кюрий-245", fr: "Oxyde de curium 245" });
Translation.addTranslation("Tiny Clump of Curium-245", { zh: "小撮锔-245", ru: "Крошечный комок Кюрия-245", pt: "Pequeno Amontoado de Curio-245", de: "Kleiner Curium-245 Klumpen" });
Translation.addTranslation("Tiny Clump of Curium-245 Oxide", { zh: "小撮氧化锔-245", ru: "Крошечный комок оксида Кюрия-245", pt: "Pequeno Amontoado de Óxido de Curio-245", de: "Kleiner Curium-245 Oxid Klumpen" });
Translation.addTranslation("Curium-246", { zh: "锔-246", ru: "Кюрий-246", fr: "Curium 246" });
Translation.addTranslation("Curium-246 Oxide", { zh: "锔-246 氧化物", ru: "Оксид Кюрий-246", fr: "Oxyde de curium 246" });
Translation.addTranslation("Tiny Clump of Curium-246", { zh: "小撮锔-246", ru: "Крошечный комок Кюрия-246", pt: "Pequeno Amontoado de Curio-246", de: "Kleiner Curium-246 Klumpen" });
Translation.addTranslation("Tiny Clump of Curium-246 Oxide", { zh: "小撮氧化锔-246", ru: "Крошечный комок оксида Кюрия-246", pt: "Pequeno Amontoado de Óxido de Curio-246", de: "Kleiner Curium-246 Oxid Klumpen" });
Translation.addTranslation("Curium-247", { zh: "锔-247", ru: "Кюрий-247", fr: "Curium 247" });
Translation.addTranslation("Curium-247 Oxide", { zh: "锔-247 氧化物", ru: "Оксид Кюрий-247", fr: "Oxyde de curium 247" });
Translation.addTranslation("Tiny Clump of Curium-247", { zh: "小撮锔-247", ru: "Крошечный комок Кюрия-247", pt: "Pequeno Amontoado de Curio-247", de: "Kleiner Curium-247 Klumpen" });
Translation.addTranslation("Tiny Clump of Curium-247 Oxide", { zh: "小撮氧化锔-247", ru: "Крошечный комок оксида Кюрия-247", pt: "Pequeno Amontoado de Óxido de Curio-247", de: "Kleiner Curium-247 Oxid Klumpen" });
Translation.addTranslation("Berkelium-247", { zh: "锫-247", ru: "Беркелий-247", fr: "Berkélium 247" });
Translation.addTranslation("Berkelium-247 Oxide", { zh: "锫-247 氧化物", ru: "Оксид Беркелий-247", fr: "Oxyde de berkélium 247" });
Translation.addTranslation("Tiny Clump of Berkelium-247", { zh: "小撮锫-247", ru: "Крошечный комок Берклия-247", pt: "Pequeno Amontoado de Berquélio-247", de: "Kleiner Berkelium-247 Klumpen" });
Translation.addTranslation("Tiny Clump of Berkelium-247 Oxide", { zh: "小撮氧化锫-247", ru: "Крошечный комок оксида Берклия-247", pt: "Pequeno Amontoado de Óxido de Berquélio-247", de: "Kleiner Berkelium-247 Oxid Klumpen" });
Translation.addTranslation("Berkelium-248", { zh: "锫-248", ru: "Беркелий-248", fr: "Berkélium 248" });
Translation.addTranslation("Berkelium-248 Oxide", { zh: "锫-248 氧化物", ru: "Оксид Беркелий-248", fr: "Oxyde de berkélium 248" });
Translation.addTranslation("Tiny Clump of Berkelium-248", { zh: "小撮锫-248", ru: "Крошечный комок Берклия-248", pt: "Pequeno Amontoado de Berquélio-248", de: "Kleiner Berkelium-248 Klumpen" });
Translation.addTranslation("Tiny Clump of Berkelium-248 Oxide", { zh: "小撮氧化锫-248", ru: "Крошечный комок оксида Берклия-248", pt: "Pequeno Amontoado de Óxido de Berquélio-248", de: "Kleiner Berkelium-248 Oxid Klumpen" });
Translation.addTranslation("Californium-249", { zh: "锎-249", ru: "Калифорний-249", fr: "Californium 249" });
Translation.addTranslation("Californium-249 Oxide", { zh: "锎-249 氧化物", ru: "Оксид Калифорний-249", fr: "Oxyde de californium 249" });
Translation.addTranslation("Tiny Clump of Californium-249", { zh: "小撮锎-249", ru: "Крошечный комок Калифорния-249", pt: "Pequeno Amontoado de Califórnio-249", de: "Kleiner Californium-249 Klumpen" });
Translation.addTranslation("Tiny Clump of Californium-249 Oxide", { zh: "小撮氧化锎-249", ru: "Крошечный комок оксида Калифорния-249", pt: "Pequeno Amontoado de Óxido de Califórnio-249", de: "Kleiner Californium-249 Oxid Klumpen" });
Translation.addTranslation("Californium-250", { zh: "锎-250", ru: "Калифорний-250", fr: "Californium 250" });
Translation.addTranslation("Californium-250 Oxide", { zh: "锎-250 氧化物", ru: "Оксид Калифорний-250", fr: "Oxyde de californium 250" });
Translation.addTranslation("Tiny Clump of Californium-250", { zh: "小撮锎-250", ru: "Крошечный комок Калифорния-250", pt: "Pequeno Amontoado de Califórnio-250", de: "Kleiner Californium-250 Klumpen" });
Translation.addTranslation("Tiny Clump of Californium-250 Oxide", { zh: "小撮氧化锎-250", ru: "Крошечный комок оксида Калифорния-250", pt: "Pequeno Amontoado de Óxido de Califórnio-250", de: "Kleiner Californium-250 Oxid Klumpen" });
Translation.addTranslation("Californium-251", { zh: "锎-251", ru: "Калифорний-251", fr: "Californium 251" });
Translation.addTranslation("Californium-251 Oxide", { zh: "锎-251 氧化物", ru: "Оксид Калифорний-251", fr: "Oxyde de californium 251" });
Translation.addTranslation("Tiny Clump of Californium-251", { zh: "小撮锎-251", ru: "Крошечный комок Калифорния-251", pt: "Pequeno Amontoado de Califórnio-251", de: "Kleiner Californium-251 Klumpen" });
Translation.addTranslation("Tiny Clump of Californium-251 Oxide", { zh: "小撮氧化锎-251", ru: "Крошечный комок оксида Калифорния-251", pt: "Pequeno Amontoado de Óxido de Califórnio-251", de: "Kleiner Californium-251 Oxid Klumpen" });
Translation.addTranslation("Californium-252", { zh: "锎-252", ru: "Калифорний-252", fr: "Californium 252" });
Translation.addTranslation("Californium-252 Oxide", { zh: "锎-252 氧化物", ru: "Оксид Калифорний-252", fr: "Oxyde de californium 252" });
Translation.addTranslation("Tiny Clump of Californium-252", { zh: "小撮锎-252", ru: "Крошечный комок Калифорния-252", pt: "Pequeno Amontoado de Califórnio-252", de: "Kleiner Californium-252 Klumpen" });
Translation.addTranslation("Tiny Clump of Californium-252 Oxide", { zh: "小撮氧化锎-252", ru: "Крошечный комок оксида Калифорния-252", pt: "Pequeno Amontoado de Óxido de Califórnio-252", de: "Kleiner Californium-252 Oxid Klumpen" });

Translation.addTranslation("Boron-10", { zh: "硼-10", ru: "Бор-10", fr: "Bore 10" });
Translation.addTranslation("Tiny Clump of Boron-10", { zh: "小撮硼-10", ru: "Крошечный комок Бора-10", pt: "Pequeno Amontoado de Boro-10", de: "Kleiner Bor-10 Klumpen" });
Translation.addTranslation("Boron-11", { zh: "硼-11", ru: "Бор-11", fr: "Bore 11" });
Translation.addTranslation("Tiny Clump of Boron-11", { zh: "小撮硼-11", ru: "Крошечный комок Бора-11", pt: "Pequeno Amontoado de Boro-11", de: "Kleiner Bor-11 Klumpen" });
Translation.addTranslation("Lithium-6", { zh: "锂-6", ru: "Литий-6", fr: "Lithium 6" });
Translation.addTranslation("Tiny Clump of Lithium-6", { zh: "小撮锂-6", ru: "Крошечный комок Лития-6", pt: "Pequeno Amontoado de Lítio-6", de: "Kleiner Lithium-6 Klumpen" });
Translation.addTranslation("Lithium-7", { zh: "锂-7", ru: "Литий-7", fr: "Lithium 7" });
Translation.addTranslation("Tiny Clump of Lithium-7", { zh: "小撮锂-7", ru: "Крошечный комок Лития-7", pt: "Pequeno Amontoado de Lítio-7", de: "Kleiner Lithium-7 Klumpen" });


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
Translation.addTranslation("Molten Arsenic", { ru: "Расплавленный мышьяк", de: "Flüssiges Arsenik" });

Translation.addTranslation("Liquid Helium", { zh: "液氦", ru: "Жидкий гелий", fr: "Hélium liquide" });
Translation.addTranslation("Liquid Nitrogen", { zh: "液氮", ru: "Жидкий азот", fr: "Azote liquide" });

// Translation.addTranslation("Plasma", { zh: "等离子体", ru: "Плазма", pt: "Plasma", fr: "Plasma", de: "Plasma" });
// Translation.addTranslation("Neutron Fluid", { zh: "中子流体", ru: "Нейтронная жидкость", pt: "Fluido de Neutrons", de: "Neutronenflüssigkeit" });

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
// ... without Fuel suffix
Translation.addTranslation("TBU Fuel", { zh: "TBU燃料", ru: "Топливо TBU", pt: "Combustível TBU", de: "TBU Kernbrennstoff" });
Translation.addTranslation("TBU Oxide Fuel", { zh: "氧化TBU燃料", ru: "Оксидное Топливо TBU", pt: "Óxido de Combustível TBU", de: "TBU Oxid Kernbrennstoff" });
Translation.addTranslation("LEU-233 Fuel", { zh: "低密度铀-233燃料", ru: "Топливо LEU-233", pt: "Pastilha de LEU-233", de: "LEU-233 Kernbrennstoff" });
Translation.addTranslation("LEU-233 Oxide Fuel", { zh: "低密度氧化铀-233燃料", ru: "Оксидное топливо LEU-233", pt: "Pastilha de Óxido de LEU-233", de: "LEU-233 Oxid Kernbrennstoff" });
Translation.addTranslation("HEU-233 Fuel", { zh: "高密度铀-233燃料", ru: "Топливо HEU-233", pt: "Pastilha de HEU-233", de: "HEU-233 Kernbrennstoff" });
Translation.addTranslation("HEU-233 Oxide Fuel", { zh: "高密度氧化铀-233燃料", ru: "Оксидное топливо HEU-233", pt: "Pastilha de Óxido de HEU-233", de: "HEU-233 Oxid Kernbrennstoff" });
Translation.addTranslation("LEU-235 Fuel", { zh: "低密度铀-235燃料", ru: "Топливо LEU-235", pt: "Pastilha de LEU-235", de: "LEU-235 Kernbrennstoff" });
Translation.addTranslation("LEU-235 Oxide Fuel", { zh: "低密度氧化铀-235燃料", ru: "Оксидное топливо LEU-235", pt: "Pastilha de Óxido de LEU-235", de: "LEU-235 Oxid Kernbrennstoff" });
Translation.addTranslation("HEU-235 Fuel", { zh: "高密度铀-235燃料", ru: "Топливо HEU-235", pt: "Pastilha de HEU-235", de: "HEU-235 Kernbrennstoff" });
Translation.addTranslation("HEU-235 Oxide Fuel", { zh: "高密度氧化铀-235燃料", ru: "Оксидное топливо HEU-235", pt: "Pastilha de Óxido de HEU-235", de: "HEU-235 Oxid Kernbrennstoff" });
Translation.addTranslation("LEN-236 Fuel", { zh: "低密度镎-236燃料", ru: "Топливо LEN-236", pt: "Pastilha de LEN-236", de: "LEN-236 Kernbrennstoff" });
Translation.addTranslation("LEN-236 Oxide Fuel", { zh: "低密度氧化镎-236燃料", ru: "Оксидное топливо LEN-236", pt: "Pastilha de Óxido de LEN-236", de: "LEN-236 Oxid Kernbrennstoff" });
Translation.addTranslation("HEN-236 Fuel", { zh: "高密度镎-236燃料", ru: "Топливо HEN-236", pt: "Pastilha de HEN-236", de: "HEN-236 Kernbrennstoff" });
Translation.addTranslation("HEN-236 Oxide Fuel", { zh: "高密度氧化镎-236燃料", ru: "Оксидное топливо HEN-236", pt: "Pastilha de Óxido de HEN-236", de: "HEN-236 Oxid Kernbrennstoff" });
Translation.addTranslation("LEP-239 Fuel", { zh: "低密度钚-239燃料", ru: "Топливо LEP-239", pt: "Pastilha de LEP-239", de: "LEP-239 Kernbrennstoff" });
Translation.addTranslation("LEP-239 Oxide Fuel", { zh: "低密度氧化钚-239燃料", ru: "Оксидное топливо LEP-239", pt: "Pastilha de Óxido de LEP-239", de: "LEP-239 Oxid Kernbrennstoff" });
Translation.addTranslation("HEP-239 Fuel", { zh: "高密度钚-239燃料", ru: "Топливо HEP-239", pt: "Pastilha de HEP-239", de: "HEP-239 Kernbrennstoff" });
Translation.addTranslation("HEP-239 Oxide Fuel", { zh: "高密度氧化钚-239燃料", ru: "Оксидное топливо HEP-239", pt: "Pastilha de Óxido de HEP-239", de: "HEP-239 Oxid Kernbrennstoff" });
Translation.addTranslation("LEP-241 Fuel", { zh: "低密度钚-241燃料", ru: "Топливо LEP-241", pt: "Pastilha de LEP-241", de: "LEP-241 Kernbrennstoff" });
Translation.addTranslation("LEP-241 Oxide Fuel", { zh: "低密度氧化钚-241燃料", ru: "Оксидное топливо LEP-241", pt: "Pastilha de Óxido de LEP-241", de: "LEP-241 Oxid Kernbrennstoff" });
Translation.addTranslation("HEP-241 Fuel", { zh: "高密度钚-241燃料", ru: "Топливо HEP-241", pt: "Pastilha de HEP-241", de: "HEP-241 Kernbrennstoff" });
Translation.addTranslation("HEP-241 Oxide Fuel", { zh: "高密度氧化钚-241燃料", ru: "Оксидное топливо HEP-241", pt: "Pastilha de Óxido de HEP-241", de: "HEP-241 Oxid Kernbrennstoff" });
Translation.addTranslation("MOX-239 Fuel", { zh: "MOX-239 燃料", ru: "Топливо MOX-239", pt: "Pastilha de MOX-239", de: "MOX-239 Kernbrennstoff" });
Translation.addTranslation("MOX-241 Fuel", { zh: "MOX-241 燃料", ru: "Топливо MOX-241", pt: "Pastilha de MOX-241", de: "MOX-241 Kernbrennstoff" });
Translation.addTranslation("LEA-242 Fuel", { zh: "低密度镅-242燃料", ru: "Топливо LEA-242", pt: "Pastilha de LEA-242", de: "LEA-242 Kernbrennstoff" });
Translation.addTranslation("LEA-242 Oxide Fuel", { zh: "低密度氧化镅-242燃料", ru: "Оксидное топливо LEA-242", pt: "Pastilha de Óxido de LEA-242", de: "LEA-242 Oxid Kernbrennstoff" });
Translation.addTranslation("HEA-242 Fuel", { zh: "高密度镅-242燃料", ru: "Топливо HEA-242", pt: "Pastilha de HEA-242", de: "HEA-242 Kernbrennstoff" });
Translation.addTranslation("HEA-242 Oxide Fuel", { zh: "高密度氧化镅-242燃料", ru: "Оксидное топливо HEA-242", pt: "Pastilha de Óxido de HEA-242", de: "HEA-242 Oxid Kernbrennstoff" });
Translation.addTranslation("LECm-243 Fuel", { zh: "低密度锔-243燃料", ru: "Топливо LECm-243", pt: "Pastilha de LECm-243", de: "LECm-243 Kernbrennstoff" });
Translation.addTranslation("LECm-243 Oxide Fuel", { zh: "低密度氧化锔-243燃料", ru: "Оксидное топливо LECm-243", pt: "Pastilha de Óxido de LECm-243", de: "LECm-243 Oxid Kernbrennstoff" });
Translation.addTranslation("HECm-243 Fuel", { zh: "高密度锔-243燃料", ru: "Топливо HECm-243", pt: "Pastilha de HECm-243", de: "HECm-243 Kernbrennstoff" });
Translation.addTranslation("HECm-243 Oxide Fuel", { zh: "高密度氧化锔-243燃料", ru: "Оксидное топливо HECm-243", pt: "Pastilha de Óxido de HECm-243", de: "HECm-243 Oxid Kernbrennstoff" });
Translation.addTranslation("LECm-245 Fuel", { zh: "低密度锔-245燃料", ru: "Топливо LECm-245", pt: "Pastilha de LECm-245", de: "LECm-245 Kernbrennstoff" });
Translation.addTranslation("LECm-245 Oxide Fuel", { zh: "低密度氧化锔-245燃料", ru: "Оксидное топливо LECm-245", pt: "Pastilha de Óxido de LECm-245", de: "LECm-245 Oxid Kernbrennstoff" });
Translation.addTranslation("HECm-245 Fuel", { zh: "高密度锔-245燃料", ru: "Топливо HECm-245", pt: "Pastilha de HECm-245", de: "HECm-245 Kernbrennstoff" });
Translation.addTranslation("HECm-245 Oxide Fuel", { zh: "高密度氧化锔-245燃料", ru: "Оксидное топливо HECm-245", pt: "Pastilha de Óxido de HECm-245", de: "HECm-245 Oxid Kernbrennstoff" });
Translation.addTranslation("LECm-247 Fuel", { zh: "低密度锔-247燃料", ru: "Топливо LECm-247", pt: "Pastilha de LECm-247", de: "LECm-247 Kernbrennstoff" });
Translation.addTranslation("LECm-247 Oxide Fuel", { zh: "低密度氧化锔-247燃料", ru: "Оксидное топливо LECm-247", pt: "Pastilha de Óxido de LECm-247", de: "LECm-247 Oxid Kernbrennstoff" });
Translation.addTranslation("HECm-247 Fuel", { zh: "高密度锔-247燃料", ru: "Топливо HECm-247", pt: "Pastilha de HECm-247", de: "HECm-247 Kernbrennstoff" });
Translation.addTranslation("HECm-247 Oxide Fuel", { zh: "高密度氧化锔-247燃料", ru: "Оксидное топливо HECm-247", pt: "Pastilha de Óxido de HECm-247", de: "HECm-247 Oxid Kernbrennstoff" });
Translation.addTranslation("LEB-248 Fuel", { zh: "低密度锫-248燃料", ru: "Топливо LEB-248", pt: "Pastilha de LEB-248", de: "LEB-248 Kernbrennstoff" });
Translation.addTranslation("LEB-248 Oxide Fuel", { zh: "低密度氧化锫-248燃料", ru: "Оксидное топливо LEB-248", pt: "Pastilha de Óxido de LEB-248", de: "LEB-248 Oxid Kernbrennstoff" });
Translation.addTranslation("HEB-248 Fuel", { zh: "高密度锫-248燃料", ru: "Топливо HEB-248", pt: "Pastilha de HEB-248", de: "HEB-248 Kernbrennstoff" });
Translation.addTranslation("HEB-248 Oxide Fuel", { zh: "高密度氧化锫-248燃料", ru: "Оксидное топливо HEB-248", pt: "Pastilha de Óxido de HEB-248", de: "HEB-248 Oxid Kernbrennstoff" });
Translation.addTranslation("LECf-249 Fuel", { zh: "低密度锎-249燃料", ru: "Топливо LECf-249", pt: "Pastilha de LECf-249", de: "LECf-249 Kernbrennstoff" });
Translation.addTranslation("LECf-249 Oxide Fuel", { zh: "低密度氧化锎-249燃料", ru: "Оксидное топливо LECf-249", pt: "Pastilha de Óxido de LECf-249", de: "LECf-249 Oxid Kernbrennstoff" });
Translation.addTranslation("HECf-249 Fuel", { zh: "高密度锎-249燃料", ru: "Топливо HECf-249", pt: "Pastilha de HECf-249", de: "HECf-249 Kernbrennstoff" });
Translation.addTranslation("HECf-249 Oxide Fuel", { zh: "高密度氧化锎-249燃料", ru: "Оксидное топливо HECf-249", pt: "Pastilha de Óxido de HECf-249", de: "HECf-249 Oxid Kernbrennstoff" });
Translation.addTranslation("LECf-251 Fuel", { zh: "低密度锎-251燃料", ru: "Топливо LECf-251", pt: "Pastilha de LECf-251", de: "LECf-251 Kernbrennstoff" });
Translation.addTranslation("LECf-251 Oxide Fuel", { zh: "低密度氧化锎-251燃料", ru: "Оксидное топливо LECf-251", pt: "Pastilha de Óxido de LECf-251", de: "LECf-251 Oxid Kernbrennstoff" });
Translation.addTranslation("HECf-251 Fuel", { zh: "高密度锎-251燃料", ru: "Топливо HECf-251", pt: "Pastilha de HECf-251", de: "HECf-251 Kernbrennstoff" });
Translation.addTranslation("HECf-251 Oxide Fuel", { zh: "高密度氧化锎-251燃料", ru: "Оксидное топливо HECf-251", pt: "Pastilha de Óxido de HECf-251", de: "HECf-251 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted TBU Fuel", { zh: "枯竭TBU燃料", ru: "Обеднённое топливо TBU", pt: "Combustível TBU Esgotado", de: "Erschöpfter TBU Kernbrennstoff" });
Translation.addTranslation("Depleted TBU Oxide Fuel", { zh: "枯竭氧化TBU燃料", ru: "Обеднённое оксидное топливо TBU", pt: "Óxido de Combustível TBU Esgotado", de: "Erschöpfter TBU Kernbrennstoff" });
Translation.addTranslation("Depleted LEU-233 Fuel", { zh: "枯竭低密度铀-233燃料", ru: "Обеднённое топливо LEU-233 ", pt: "Haste de Combustível LEU-233 Esgotado", de: "Erschöpfter LEU-233 Kernbrennstoff" });
Translation.addTranslation("Depleted LEU-233 Oxide Fuel", { zh: "枯竭低密度氧化铀-233燃料", ru: "Обеднённое оксидное топливо LEU-233", pt: "Haste de Combustível Óxido de LEU-233 Esgotado", de: "Erschöpfter LEU-233 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HEU-233 Fuel", { zh: "枯竭高密度铀-233燃料", ru: "Обеднённое топливо  HEU-233 ", pt: "Haste de Combustível HEU-233 Esgotado", de: "Erschöpfter HEU-233 Kernbrennstoff" });
Translation.addTranslation("Depleted HEU-233 Oxide Fuel", { zh: "枯竭高密度氧化铀-233燃料", ru: "Обеднённое оксидное топливо HEU-233", pt: "Haste de Combustível Óxido de HEU-233 Esgotado", de: "Erschöpfter HEU-233 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LEU-235 Fuel", { zh: "枯竭低密度铀-235燃料", ru: "Обеднённое топливо  LEU-235 ", pt: "Haste de Combustível LEU-235 Esgotado", de: "Erschöpfter LEU-235 Kernbrennstoff" });
Translation.addTranslation("Depleted LEU-235 Oxide Fuel", { zh: "枯竭低密度氧化铀-235燃料", ru: "Обеднённое оксидное топливо LEU-235", pt: "Haste de Combustível Óxido de LEU-235 Esgotado", de: "Erschöpfter LEU-235 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HEU-235 Fuel", { zh: "枯竭高密度铀-235燃料", ru: "Обеднённое топливо  HEU-235 ", pt: "Haste de Combustível HEU-235 Esgotado", de: "Erschöpfter HEU-235 Kernbrennstoff" });
Translation.addTranslation("Depleted HEU-235 Oxide Fuel", { zh: "枯竭高密度氧化铀-235燃料", ru: "Обеднённое оксидное топливо HEU-235", pt: "Haste de Combustível Óxido de HEU-235 Esgotado", de: "Erschöpfter HEU-235 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LEN-236 Fuel", { zh: "枯竭低密度镎-236燃料", ru: "Обеднённое топливо  LEN-236 ", pt: "Haste de Combustível LEN-236 Esgotado", de: "Erschöpfter LEN-236 Kernbrennstoff" });
Translation.addTranslation("Depleted LEN-236 Oxide Fuel", { zh: "枯竭低密度氧化镎-236燃料", ru: "Обеднённое оксидное топливо LEN-236", pt: "Haste de Combustível Óxido de LEN-236 Esgotado", de: "Erschöpfter LEN-236 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HEN-236 Fuel", { zh: "枯竭高密度镎-236燃料", ru: "Обеднённое топливо  HEN-236 ", pt: "Haste de Combustível HEN-236 Esgotado", de: "Erschöpfter HEN-236 Kernbrennstoff" });
Translation.addTranslation("Depleted HEN-236 Oxide Fuel", { zh: "枯竭高密度氧化镎-236燃料", ru: "Обеднённое оксидное топливо HEN-236", pt: "Haste de Combustível Óxido de HEN-236 Esgotado", de: "Erschöpfter HEN-236 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LEP-239 Fuel", { zh: "枯竭低密度钚-239燃料", ru: "Обеднённое топливо  LEP-239 ", pt: "Haste de Combustível LEP-239 Esgotado", de: "Erschöpfter LEP-239 Kernbrennstoff" });
Translation.addTranslation("Depleted LEP-239 Oxide Fuel", { zh: "枯竭低密度氧化钚-239燃料", ru: "Обеднённое оксидное топливо LEP-239", pt: "Haste de Combustível Óxido de LEP-239 Esgotado", de: "Erschöpfter LEP-239 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HEP-239 Fuel", { zh: "枯竭高密度钚-239燃料", ru: "Обеднённое топливо  HEP-239 ", pt: "Haste de Combustível HEP-239 Esgotado", de: "Erschöpfter HEP-239 Kernbrennstoff" });
Translation.addTranslation("Depleted HEP-239 Oxide Fuel", { zh: "枯竭高密度氧化钚-239燃料", ru: "Обеднённое оксидное топливо HEP-239", pt: "Haste de Combustível Óxido de HEP-239 Esgotado", de: "Erschöpfter HEP-239 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LEP-241 Fuel", { zh: "枯竭低密度钚-241燃料", ru: "Обеднённое топливо  LEP-241 ", pt: "Haste de Combustível LEP-241 Esgotado", de: "Erschöpfter LEP-241 Kernbrennstoff" });
Translation.addTranslation("Depleted LEP-241 Oxide Fuel", { zh: "枯竭低密度氧化钚-241燃料", ru: "Обеднённое оксидное топливо LEP-241", pt: "Haste de Combustível Óxido de LEP-241 Esgotado", de: "Erschöpfter LEP-241 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HEP-241 Fuel", { zh: "枯竭高密度钚-241燃料", ru: "Обеднённое топливо  HEP-241 ", pt: "Haste de Combustível HEP-241 Esgotado", de: "Erschöpfter HEP-241 Kernbrennstoff" });
Translation.addTranslation("Depleted HEP-241 Oxide Fuel", { zh: "枯竭高密度氧化钚-241燃料", ru: "Обеднённое оксидное топливо HEP-241", pt: "Haste de Combustível Óxido de HEP-241 Esgotado", de: "Erschöpfter HEP-241 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted MOX-239 Fuel", { zh: "枯竭MOX-239燃料", ru: "Обеднённое топливо MOX-239", pt: "Haste de Combustível MOX-239 Esgotado", de: "Erschöpfter MOX-239 Kernbrennstoff" });
Translation.addTranslation("Depleted MOX-241 Fuel", { zh: "枯竭MOX-241燃料", ru: "Обеднённое оксидное топливо MOX-241", pt: "Haste de Combustível MOX-241 Esgotado", de: "Erschöpfter MOX-241 Kernbrennstoff" });
Translation.addTranslation("Depleted LEA-242 Fuel", { zh: "枯竭低密度镅-242燃料", ru: "Обеднённое топливо LEA-242 ", pt: "Haste de Combustível LEA-242 Esgotado", de: "Erschöpfter LEA-242 Kernbrennstoff" });
Translation.addTranslation("Depleted LEA-242 Oxide Fuel", { zh: "枯竭高密度氧化镅-242燃料", ru: "Обеднённое оксидное топливо LEA-242", pt: "Haste de Combustível Óxido de LEA-242 Esgotado", de: "Erschöpfter LEA-242 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HEA-242 Fuel", { zh: "枯竭高密度镅-242燃料", ru: "Обеднённое топливо HEA-242 ", pt: "Haste de Combustível HEA-242 Esgotado", de: "Erschöpfter HEA-242 Kernbrennstoff" });
Translation.addTranslation("Depleted LECm-243 Fuel", { zh: "枯竭低密度锔-243燃料", ru: "Обеднённое топливо LECm-243 ", pt: "Haste de Combustível LECm-243 Esgotado", de: "Erschöpfter LECm-243 Kernbrennstoff" });
Translation.addTranslation("Depleted LECm-243 Oxide Fuel", { zh: "枯竭低密度氧化锔-243燃料", ru: "Обеднённое оксидное топливо LECm-243", pt: "Haste de Combustível Óxido de LECm-243 Esgotado", de: "Erschöpfter LECm-243 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HECm-243 Fuel", { zh: "枯竭高密度锔-243燃料", ru: "Обеднённое топливо HECm-243 ", pt: "Haste de Combustível HECm-243 Esgotado", de: "Erschöpfter HECm-243 Kernbrennstoff" });
Translation.addTranslation("Depleted HECm-243 Oxide Fuel", { zh: "枯竭高密度氧化锔-243燃料", ru: "Обеднённое оксидное топливо HECm-243", pt: "Haste de Combustível Óxido de HECm-243 Esgotado", de: "Erschöpfter HECm-243 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LECm-245 Fuel", { zh: "枯竭低密度锔-245燃料", ru: "Обеднённое топливо LECm-245 ", pt: "Haste de Combustível LECm-245 Esgotado", de: "Erschöpfter LECm-245 Kernbrennstoff" });
Translation.addTranslation("Depleted LECm-245 Oxide Fuel", { zh: "枯竭低密度氧化锔-245燃料", ru: "Обеднённое оксидное топливо LECm-245 ", pt: "Haste de Combustível Óxido de LECm-245 Esgotado", de: "Erschöpfter LECm-245 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HECm-245 Fuel", { zh: "枯竭高密度锔-245燃料", ru: "Обеднённое топливо HECm-245 ", pt: "Haste de Combustível HECm-245 Esgotado", de: "Erschöpfter HECm-245 Kernbrennstoff" });
Translation.addTranslation("Depleted HECm-245 Oxide Fuel", { zh: "枯竭高密度氧化锔-245燃料", ru: "Обеднённое оксидное топливо HECm-245", pt: "Haste de Combustível Óxido de HECm-245 Esgotado", de: "Erschöpfter HECm-245 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LECm-247 Fuel", { zh: "枯竭低密度锔-247燃料", ru: "Обеднённое топливо LECm-247 ", pt: "Haste de Combustível LECm-247 Esgotado", de: "Erschöpfter LECm-247 Kernbrennstoff" });
Translation.addTranslation("Depleted LECm-247 Oxide Fuel", { zh: "枯竭低密度氧化锔-247燃料", ru: "Обеднённое оксидное топливо LECm-247", pt: "Haste de Combustível Óxido de LECm-247 Esgotado", de: "Erschöpfter LECm-247 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HECm-247 Fuel", { zh: "枯竭高密度锔-247燃料", ru: "Обеднённое топливо HECm-247 ", pt: "Haste de Combustível HECm-247 Esgotado", de: "Erschöpfter HECm-247 Kernbrennstoff" });
Translation.addTranslation("Depleted HECm-247 Oxide Fuel", { zh: "枯竭高密度氧化锔-247燃料", ru: "Обеднённое оксидное топливо HECm-247", pt: "Haste de Combustível Óxido de HECm-247 Esgotado", de: "Erschöpfter HECm-247 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LEB-248 Fuel", { zh: "枯竭低密度锫-248燃料", ru: "Обеднённое топливо LEB-248 ", pt: "Haste de Combustível LEB-248 Esgotado", de: "Erschöpfter LEB-248 Kernbrennstoff" });
Translation.addTranslation("Depleted LEB-248 Oxide Fuel", { zh: "枯竭低密度氧化锫-248燃料", ru: "Обеднённое оксидное топливо LEB-248", pt: "Haste de Combustível Óxido de LEB-248 Esgotado", de: "Erschöpfter LEB-248 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HEB-248 Fuel", { zh: "枯竭高密度锫-248燃料", ru: "Обеднённое топливо HEB-248 ", pt: "Haste de Combustível HEB-248 Esgotado", de: "Erschöpfter HEB-248 Kernbrennstoff" });
Translation.addTranslation("Depleted HEB-248 Oxide Fuel", { zh: "枯竭高密度氧化锫-248燃料", ru: "Обеднённое оксидное топливо HEB-248", pt: "Haste de Combustível Óxido de HEB-248 Esgotado", de: "Erschöpfter HEB-248 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LECf-249 Fuel", { zh: "枯竭低密度锎-249燃料", ru: "Обеднённое топливо LECf-249 ", pt: "Haste de Combustível LECf-249 Esgotado", de: "Erschöpfter LECf-249 Kernbrennstoff" });
Translation.addTranslation("Depleted LECf-249 Oxide Fuel", { zh: "枯竭低密度氧化锎-249燃料", ru: "Обеднённое оксидное топливо LECf-249", pt: "Haste de Combustível Óxido de LECf-249 Esgotado", de: "Erschöpfter LECf-249 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HECf-249 Fuel", { zh: "枯竭高密度锎-249燃料", ru: "Обеднённое топливо HECf-249 ", pt: "Haste de Combustível HECf-249 Esgotado", de: "Erschöpfter HECf-249 Kernbrennstoff" });
Translation.addTranslation("Depleted HECf-249 Oxide Fuel", { zh: "枯竭高密度氧化锎-249燃料", ru: "Обеднённое оксидное топливо HECf-249", pt: "Haste de Combustível Óxido de HECf-249 Esgotado", de: "Erschöpfter HECf-249 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted LECf-251 Fuel", { zh: "枯竭低密度锎-251燃料", ru: "Обеднённое топливо LECf-251 ", pt: "Haste de Combustível LECf-251 Esgotado", de: "Erschöpfter LECf-251 Kernbrennstoff" });
Translation.addTranslation("Depleted LECf-251 Oxide Fuel", { zh: "枯竭低密度氧化锎-251燃料", ru: "Обеднённое оксидное топливо LECf-251", pt: "Haste de Combustível Óxido de LECf-251 Esgotado", de: "Erschöpfter LECf-251 Oxid Kernbrennstoff" });
Translation.addTranslation("Depleted HECf-251 Fuel", { zh: "枯竭高密度锎-251燃料", ru: "Обеднённое топливо HECf-251 ", pt: "Haste de Combustível HECf-251 Esgotado", de: "Erschöpfter HECf-251 Kernbrennstoff" });
Translation.addTranslation("Depleted HECf-251 Oxide Fuel", { zh: "枯竭高密度氧化锎-251燃料", ru: "Обеднённое оксидное топливо HECf-251", pt: "Haste de Combustível Óxido de HECf-251 Esgotado", de: "Erschöpfter HECf-251 Oxid Kernbrennstoff" });

// m + "min"
// s + "sec"
// Base process time: ${FissionFuel.tickToString(fuelData.time)}
Translation.addTranslation("Base Process Time:", { zh: "基础处理时间：", ru: "Базовое время процесса:", fr: "Temps de base du processus:" });
// Base power: ${fuelData.power} RF/t
Translation.addTranslation("Base Process Power:", { zh: "基础功率：", ru: "Базовое энергопотребление:", fr: "Énergie de base du processus:" });
// Base heat gen: ${fuelData.heat} H/t
Translation.addTranslation("Base Heat Gen:", { zh: "基础产热：", ru: "Базовое тепловыделение:", fr: "Génération de chaleur de base:" });


Translation.addTranslation("Speed Upgrade", { zh: "速度升级", ru: "Обновление \"Скорость\"", pt: "Melhoria de Velocidade", fr: "Amélioration de vitesse", de: "Geschwindigkeitsupgrade" });
Translation.addTranslation("Energy Upgrade", { zh: "能量升级", ru: "Обновление \"Энергия\"", fr: "Amélioration d'énergie" });
Translation.addTranslation("Fission Reactor Casing", { zh: "裂变反应堆外壳", ru: "Корпус ядерного реактора", fr: "Caisson du réacteur à fission" });
Translation.addTranslation("Transparent Fission Reactor Casing", { zh: "透明反应堆外壳", ru: "Прозрачный корпус реактора", pt: "Estrutura Transparente de Reator", de: "Transparentes Reaktorgehäuse" });
Translation.addTranslation("Reactor Cell", { zh: "反应堆单元", ru: "Реакторная ячейка", pt: "Célula de Reator", de: "Reaktorzelle" });


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
Translation.addTranslation("Thorium-230 Block", { zh: "贫钍块", ru: "Обеднённый блок тория", pt: "Bloco de Tório Esgotado", de: "Erschöpfter Thoriumblock" });
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
Translation.addTranslation("Tough Alloy", { zh: "高强合金", ru: "Прочный сплав", pt: "Liga Resistente", de: "Harte Legierung" });
Translation.addTranslation("Hard Carbon Alloy", { zh: "硬碳合金", ru: "Твердый углерод", pt: "Liga de Carbono Endurecido", de: "Harte Kohlenstofflegierung" });
Translation.addTranslation("Magnesium Diboride Alloy", { zh: "二硼化镁合金", ru: "Сплав диборида магния", pt: "Liga de Diboreto de Magnésio", de: "Magnesiumdiboridlegierung" });
Translation.addTranslation("Lithium Manganese Dioxide Alloy", { zh: "锂锰氧化物合金", ru: "Сплав литий-марганцевого диоксида", pt: "Liga de Dióxido de Manganês de Lítio", de: "Lithiummangandioxidlegierung" });
Translation.addTranslation("Steel Ingot", { zh: "钢锭", ru: "Стальной сплав", pt: "Liga de Aço", fr: "Lingot d'acier", de: "Stahlbarren" });
Translation.addTranslation("Ferroboron Alloy", { zh: "硼铁合金", ru: "Ферроборонный сплав", pt: "Liga de Ferro-boro", de: "Ferroborlegierung" });
Translation.addTranslation("Shibuichi Alloy", { zh: "朦胧银", ru: "Шибуичи сплав", pt: "Liga Shibuichi", de: "Shibuichilegierung" });
Translation.addTranslation("Tin Silver Alloy", { zh: "锡银合金", ru: "Оловянно-серебряный сплав", pt: "Liga de Estanho Prateado", de: "Zinnsilberlegierung" });
Translation.addTranslation("Lead Platinum Alloy", { zh: "铅铂合金", ru: "Свинцово-платиновый сплав", pt: "Liga de Platina com Chumbo", de: "Bleiplatinlegierung" });
Translation.addTranslation("Extreme Alloy", { ru: "Экстремальный сплав", de: "Extreme Legierung" });
Translation.addTranslation("Thermoconducting Alloy", { ru: "Термопроводящий сплав", de: "Wärmeleitende Legierung" });
Translation.addTranslation("Zircaloy", { ru: "Цирконий" });
// Silicon Carbide Alloy
Translation.addTranslation("Silicon Carbide Ingot", { zh: "碳化硅锭", ru: "Слиток карбида кремния", fr: "Lingot de carbure de silicium" });
Translation.addTranslation("SiC-SiC Ceramic Matrix Composite", { ru: "Кремниево-кремниевый матричный композит" });
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
