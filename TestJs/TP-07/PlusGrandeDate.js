function plusGrandeDate(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        throw new Error(`Les arguments doivent être des objets Date. Vous avez fourni des types ${typeof date1} et ${typeof date2}.`);
    }
    return date1 > date2 ? date1 : date2;
}

try {
    console.log(plusGrandeDate("2023-01-01", new Date("2022-12-31")));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}
try {
    console.log(plusGrandeDate(new Date("2023-01-01"), new Date("2022-12-31")));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}
try {
    console.log(plusGrandeDate(new Date("2021-05-15"), 12345));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}