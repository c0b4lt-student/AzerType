1. L’application propose un mot.


2. L’utilisateur tape ce mot au clavier.


3. Si le mot de l’utilisateur est exactement le même que le mot de l’application, alors on ajoute un point au score.


4. On passe au mot suivant.


5. On recommence à l’étape 1, jusqu’à ce que le temps soit écoulé.


#### Algo
```###### timeLeft = 60
WHILE timeLeft > 0 {
    ??? => secretWord
    WHILE userWord != secretWord {
        =user?> userWord
        IF userWord == secretWord THEN score++
    }
}
PRINT score
```