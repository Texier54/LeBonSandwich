define({ "api": [
  {
    "type": "get",
    "url": "/commandes/:id",
    "title": "Affichage des commandes",
    "group": "commandes",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la commande</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type de requête</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta données</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "meta.date",
            "description": "<p>Date de la requête</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "meta.locale",
            "description": "<p>Langue</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "commande",
            "description": "<p>Toutes les commandes</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "commande.id",
            "description": "<p>id de la commande</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.nom",
            "description": "<p>Nom du client</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.prenom",
            "description": "<p>Prenom du client</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.mail",
            "description": "<p>Mail du client</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "commande.livraison",
            "description": "<p>Date et heure de livraison</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.livraison.date",
            "description": "<p>Date de livraison</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.livraison.heure",
            "description": "<p>Heure de livraison</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.etat",
            "description": "<p>Etat de la livraison</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "commande.items",
            "description": "<p>Les sandwichs commandés</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "commande.items.id",
            "description": "<p>Id de l'item</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "commande.items.tailles_sandwich",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "commande.items.tailles_sandwich.id",
            "description": "<p>Id de la taille</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.items.tailles_sandwich.nom",
            "description": "<p>Nom de la taille</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.items.tailles_sandwich.description",
            "description": "<p>Description de la taille</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "commande.items.sandwich",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "commande.items.sandwich.id",
            "description": "<p>Id du sandwich</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.items.sandwich.nom",
            "description": "<p>Nom du sandwich</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.items.sandwich.description",
            "description": "<p>Description du sandwich</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.items.sandwich.type_pain",
            "description": "<p>Type de pain</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.items.sandwich.img",
            "description": "<p>Img lié au sandwich</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commande.items.quantit",
            "description": "<p>é Nombre d'exemplaire voulu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"type\": \"collection\",\n    \"meta\": {\n        \"count\": 17,\n        \"date\": \"02-04-2018\"\n    },\n    \"commandes\":{\n        \"id\": \"b37ca5ba-05d0-11e8-ae96-6929a53b463d\",\n        \"nom\": \"Dupont\",\n        \"prenom\": \"Jean\",\n        \"mail\": \"jd@gmail.com\",\n        \"livraison\": {\n            \"date\": \"07-02-2019\",\n            \"heure\": \"12:30\"\n        },\n        \"etat\": 1,\n        \"items\": {\n            \"id\": 2,\n            \"taille_sandwich\": {\n                \"id\": 3,\n                \"nom\": \"grosse faim\",\n                \"description\": \"à partager, ou pour les affamés\"\n            },\n            \"sandwich\": {\n                \"id\": 7,\n                \"nom\" \"le forestier\",\n                \"description\": \"un bon sandwich au gout de la forêt\",\n                \"type_pain\": \"pain complet\",\n                \"img\": \"www.google.fr\"\n            },\n            \"quantité\": 2\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.php",
    "groupTitle": "commandes",
    "name": "GetCommandesId"
  },
  {
    "type": "get",
    "url": "/commandes?sort=:sort&?state=:state",
    "title": "Affichage des commandes",
    "group": "commandes",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>Ranger les commandes (only 'created_at')</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Avoir les commandes selon leur état ('1': commandé, '2': payé, '3': prete, '4': livré)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type de requête</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta données</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Nombre de commandes</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "meta.date",
            "description": "<p>Date de la requête</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "commandes",
            "description": "<p>Toutes les commandes</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "commandes.id",
            "description": "<p>id de la commande</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commandes.nom",
            "description": "<p>Nom du client</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commandes.prenom",
            "description": "<p>Prenom du client</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commandes.mail",
            "description": "<p>Mail du client</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "commandes.livraison",
            "description": "<p>Date et heure de livraison</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commandes.livraison.date",
            "description": "<p>Date de livraison</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commandes.livraison.heure",
            "description": "<p>Heure de livraison</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "commandes.etat",
            "description": "<p>Etat de la livraison</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"type\": \"collection\",\n    \"meta\": {\n        \"count\": 17,\n        \"date\": \"02-04-2018\"\n    },\n    \"commandes\":{\n        \"id\": \"b37ca5ba-05d0-11e8-ae96-6929a53b463d\",\n        \"nom\": \"Dupont\",\n        \"prenom\": \"Jean\",\n        \"mail\": \"jd@gmail.com\",\n        \"livraison\": {\n            \"date\": \"07-02-2019\",\n            \"heure\": \"12:30\"\n        },\n        \"etat\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.php",
    "groupTitle": "commandes",
    "name": "GetCommandesSortSortStateState"
  },
  {
    "type": "patch",
    "url": "/commandes/:id/edit_state",
    "title": "Affichage des commandes",
    "group": "commandes",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la commande</p>"
          }
        ],
        "paramêtre de la requête": [
          {
            "group": "paramêtre de la requête",
            "type": "Number",
            "optional": false,
            "field": "etat",
            "description": "<p>Etat voulu pour la commande ('2': payé, '3':en livraison ou '4': livré)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(json) Input",
          "content": "{\n    \"etat\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type de requête</p>"
          },
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta données</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "meta.date",
            "description": "<p>Date de la requête</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "meta.local",
            "description": "<p>Langue</p>"
          },
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "commande",
            "description": "<p>Toutes les commandes</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "commande.id",
            "description": "<p>id de la commande</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "commande.nom",
            "description": "<p>Nom du client</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "commande.prenom",
            "description": "<p>Prenom du client</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "commande.mail",
            "description": "<p>Mail du client</p>"
          },
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "commande.livraison",
            "description": "<p>Date et heure de livraison</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "commande.livraison.date",
            "description": "<p>Date de livraison</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "commande.livraison.heure",
            "description": "<p>Heure de livraison</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "commande.etat",
            "description": "<p>Etat de la livraison</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"type\": \"collection\",\n    \"meta\": {\n        \"date\": \"02-04-2018\",\n        \"local\": \"fr-FR\"\n    },\n    \"commandes\":{\n        \"id\": \"b37ca5ba-05d0-11e8-ae96-6929a53b463d\",\n        \"nom\": \"Dupont\",\n        \"prenom\": \"Jean\",\n        \"mail\": \"jd@gmail.com\",\n        \"livraison\": {\n            \"date\": \"07-02-2019\",\n            \"heure\": \"12:30\"\n        },\n        \"etat\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes.php",
    "groupTitle": "commandes",
    "name": "PatchCommandesIdEdit_state"
  }
] });
