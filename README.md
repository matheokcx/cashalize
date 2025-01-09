# Cashalize - Dashboard d'analyse d'un compte d'investissement

*Cashalize est une application non-dynamique qui permet de visualiser sur différents intervals, l'evolution du solde d'un compte d'investissement global, en fonction des catégories, de leur répartition sur l'ensemble du solde.* 

## Fonctionnalités

- Visualiser la valeurs du solde sur 3, 6 et 12 mois
- Graphiques interactibles
- Possibilité de pouvoir intérer ses propres données (bientot disponible)

## Accesssibilité

L'application est utilisable sur smartphone et possède un mode nuit pour éviter de se détruire les yeux durant une utilisation dans l'obscurité !

## Exemple de fichier de données

**!\ tm = trois mois, sm = six mois, oy = one year /!** 

```json
{
    "tm": {
        "lineGraph": {
            "labels": [
                "janvier",
                "fevrier",
                "mars"
            ],
            "label": "Evolution de votre capital sur les 3 derniers mois",
            "data": [
                7456,
                3245,
                9823
            ]
        },
        "circleGraph": {
            "labels": [
                "Bitcoin",
                "S&P500",
                "CAC40"
            ],
            "data": [
                23,
                30,
                47
            ]
        },
        "barGraph": {
            "labels": [
                "Marché boursier",
                "Indices",
                "Crypto-monnaies"
            ],
            "data": [
                4600,
                3000,
                2223
            ]
        }
    },
    "sm": {
        "lineGraph": {
            "labels": [
                "janvier",
                "fevrier",
                "mars",
                "avril",
                "mai",
                "juin"
            ],
            "label": "Evolution de votre capital sur les 6 derniers mois",
            "data": [
                7456,
                3245,
                9823,
                5123,
                8765,
                2345
            ]
        },
        "circleGraph": {
            "labels": [
                "Bitcoin",
                "S&P500",
                "CAC40",
                "Gold",
                "Real Estate"
            ],
            "data": [
                20,
                25,
                30,
                15,
                10
            ]
        },
        "barGraph": {
            "labels": [
                "Marché boursier",
                "Indices",
                "Crypto-monnaies",
                "Métaux précieux",
                "Immobilier"
            ],
            "data": [
                800,
                600,
                500,
                245,
                200
            ]
        }
    },
    "oy": {
        "lineGraph": {
            "labels": [
                "janvier",
                "fevrier",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "aout",
                "septembre",
                "octobre",
                "novembre",
                "decembre"
            ],
            "label": "Evolution de votre capital sur la derniere annee",
            "data": [
                7456,
                3245,
                9823,
                5123,
                8765,
                2345,
                6891,
                9432,
                7845,
                4231,
                6578,
                3123
            ]
        },
        "circleGraph": {
            "labels": [
                "Bitcoin",
                "S&P500",
                "CAC40",
                "Gold",
                "Real Estate",
                "Emerging Markets",
                "Bonds"
            ],
            "data": [
                15,
                20,
                25,
                10,
                10,
                10,
                10
            ]
        },
        "barGraph": {
            "labels": [
                "Marché boursier",
                "Indices",
                "Crypto-monnaies",
                "Métaux précieux",
                "Immobilier",
                "Marchés émergents",
                "Obligations"
            ],
            "data": [
                1000,
                800,
                600,
                400,
                200,
                100,
                23
            ]
        }
    }
}
```
