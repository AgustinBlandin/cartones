from time import localtime

dia=int(input('Ingrese dia de nacimiento: '))
mes=int(input('Ingrese mes de nacimiento: '))
anho=int(input('Ingrese anho de nacimiento: '))
t=localtime()
diahoy= t.tm_mday
meshoy=t.tm_mon
anhohoy=t.tm_year

if anho!=anhohoy:
    if mes<meshoy:
        edad=anhohoy-anho
    else:
        edad=anhohoy-anho-1
else:
    edad = 0

if mes<meshoy and dia<diahoy:
    meses=meshoy-mes
    diass=diahoy-dia

elif mes>meshoy and dia<diahoy:
    meses=12-mes+meshoy
    diass=diahoy-dia

elif mes<meshoy and dia>diahoy:
    meses=meshoy-mes-1
    diass=30-dia+diahoy

elif mes>meshoy and dia>diahoy:
    meses=12-mes+meshoy-1
    diass=30-dia+diahoy

elif mes==meshoy and dia<diahoy:
    meses=0
    dias=diahoy-dia

elif mes==meshoy and dia>diahoy:
    meses=11
    diass=30-dia+diahoy

elif mes<meshoy and dia==diahoy:
    meses=meshoy-mes
    diass=0
elif mes>meshoy and dia==diahoy:
    meses=12-mes+meshoy
else:
    meses=0
    diass=0

print('Usted tiene '+str(edad)+' anhos, '+str(meses)+' meses y '+str(diass)+' dias')