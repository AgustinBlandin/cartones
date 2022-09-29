
numero = int(input('ingrese el numero: '))

def primo(numero):
    cuenta=0
    for i in range(2,numero):
        if numero%i != 0:
            cuenta=cuenta+1
    if cuenta == (numero-2):
        print('el numero es primo')
    else:
        print('el numero no es primo')
        print('tiene '+str(numero-cuenta)+' divisores')
   
primo(numero) 

