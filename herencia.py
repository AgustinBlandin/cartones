class Rectangulo:

    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base*self.altura

class Triangulo(Rectangulo):

    def __init__(self, base, altura):
        super().__init__(base, altura/2)


if __name__=='__main__':
    rectangulo=Rectangulo(3,3)
    print(rectangulo.area())

    triangul=Triangulo(4,6)
    print(triangul.area())