import collections


class Estatistica:
    @classmethod
    def media(cls, numbers):

        # count = 0
        # for number in numbers:
        #     count += number

        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        return numbers[len(numbers) // 2]

    @classmethod
    def moda(cls, numbers):
        number, _ = collections.Counter(numbers).most_common()[0]
        return number


numbers1 = Estatistica()
print(numbers1.media([1, 4, 3]))

print(numbers1.mediana([1, 4, 3]))

print(numbers1.moda([1, 4, 3, 4]))
