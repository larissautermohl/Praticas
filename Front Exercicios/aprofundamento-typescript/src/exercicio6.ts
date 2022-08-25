enum sigla {
    AC = "AC",
    DC = "DC"
}

function determinaAnoHistorico(ano: number, annoDomini: sigla): string | undefined {

    if (ano === NaN || annoDomini === undefined) {
        return "Informe um ano ou sigla válida!"
    }

    switch (annoDomini) {
        case "AC":
            if (ano > 4000) {
                return "Pré-história"
            } else {
                return "Idade Antiga"
            }
        case "DC" || undefined:
            if (ano < 476) {
                return "Idade Antiga"
            } else if (ano >= 476 && ano < 1453) {
                return "Idade Média"
            } else if (ano >= 1453 && ano < 1789) {
                return "Idade Moderna"
            } else if (ano >= 1789) {
                return "Idade Contemporânea"
            }
    }
}
    console.log(determinaAnoHistorico(12, sigla.AC))