import json


def import_pokemons(file_path):
    try:
        with open(file_path) as file:
            return json.load(file)["results"]

    except json.decoder.JSONDecodeError:
        print("Probela ao abrir o arquivo")
        return ""
    except FileNotFoundError:
        print("Arquivo não encontrado")
        return ""


def filter_pokemons_by_type(pokemons, type):
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type


if __name__ == "__main__":
    pokemons = import_pokemons("data/pokemons.json")
    print(filter_pokemons_by_type(pokemons, "Grass"))
