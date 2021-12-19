import pytest


from codigo import is_odd, divide


def test_when_number_is_odd_returns_true():
    "Para um número ímpar a função is_odd deve retornar o valor True"
    assert is_odd(3) is True


def test_when_number_is_even_returns_false():
    "Para um número par a função is_odd deve retornar o valor False"
    assert is_odd(4) is False


def test_when_other_number_is_zero_raises_an_exception():
    "Erro ao dividir um número por 0"
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)


# uma fixture utilizando a biblioteca pytest
# é definida utilizando a sintaxe abaixo
@pytest.fixture
def orders():
    """Nosso cenário (contexto) temos os seguintes pedidos"""
    return [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
    ]
