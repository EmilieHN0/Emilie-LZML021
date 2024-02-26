let poem = 
`LA LIBERTE
Je suis la liberté,
Répétait-il, la liberté
Avec tous les dangers…
undefined
//identifier le titre qui était en maj, remplacer par rien, et pour éviter une ligne vide
let poeme = poem.replace (/\b[A-Z]{2,}\b/g,"").trim();
poeme
"Je suis la liberté,
Répétait-il, la liberté
Avec tous les dangers
Que je vais vous valoir
Et, pour le faire taire
Il faudra me tuer.

Mais on le laissait faire
On le laissait parler.
Il était bien trop solitaire
Pour amener l'homme à briser
Le cercle de fer et d'acier
Où l'injustice et la misère
L'avaient peu à peu enfermé.

Je suis la liberté,
Répétait-il encore.
Regardez-vous ! Vous êtes morts.
Mais comme on avait à manger,
On le laissait crier."
//identifier les phrases à l'aide des ponctuations à la fin de chaque phrase
let ph = poeme.split(/[.!]/);
console.log("Nombre de phrases:", ph.length);
Nombre de phrases: 8 debugger eval code:3:9
undefined
//2)j'ai pas réussi, à part identifier les mots 
let m = poeme.match(/\p{L}+/gu);
undefined
m
Array(87) [ "Je", "suis", "la", "liberté", "Répétait", "il", "la", "liberté", "Avec", "tous", … ]

//reperer retours de lignes-vides
let st = poeme.split('\n\n');

// identifier chaque strophe séparément + le nombre de lignes
st.forEach((st, index) => {…
Le strophe 1 contient 6 lignes debugger eval code:7:13
Le strophe 2 contient 7 lignes debugger eval code:7:13
Le strophe 3 contient 5 lignes debugger eval code:7:13
Nous avons en tout: 3 strophes debugger eval code:10:9
undefined
