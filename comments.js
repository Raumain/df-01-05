const guestbookComments = [
  {
    name: "xX_CyberDude_Xx",
    date: "2001-03-15",
    comment: {
      en: "MindSync is AWESOME! I haven't eaten or slept in three weeks. My productivity is through the roof. I even forgot what my physical body looked like lol. 10/10 would upload again.",
      fr: "MindSync est GÉNIAL ! Je n'ai rien mangé ni dormi depuis trois semaines. Ma productivité est incroyable. J'ai même oublié à quoi ressemblait mon corps physique lol. 10/10 je recommencerais."
    }
  },
  {
    name: "CEOBillionaire_78",
    date: "2000-11-02",
    comment: {
      en: "A paradigm shift in human potential. My entire board of directors has been synergized. Our quarterly reports are now generated in 0.02 seconds. This is the future of business.",
      fr: "Un changement de paradigme dans le potentiel humain. Tout mon conseil d'administration a été synchronisé. Nos rapports trimestriels sont générés en 0,02 secondes. C'est l'avenir des affaires."
    }
  },
  {
    name: "-=Lara_C.=-",
    date: "2002-01-20",
    comment: {
      en: "My consciousness transfer was only 87.4% complete and I feel great! Sure, I can't remember my childhood, but the free 1.44 MB of mental storage is totally worth it. The pop-up ads in my thoughts are a bit annoying though.",
      fr: "Mon transfert de conscience n'était que 87,4% complet et je me sens super bien ! Bien sûr, je ne me souviens pas de mon enfance, mais l'espace de stockage mental gratuit de 1,44 Mo vaut vraiment le coup. Les pubs pop-up dans mes pensées sont un peu ennuyantes par contre."
    }
  },
  {
    name: "n00bMaster_99",
    date: "2001-07-11",
    comment: {
      en: "omg i can finally think at 56k speeds!!! my brain used to lag so much but now its like dial-up connected straight to my neurons XD no more 404 errors in my head!!!",
      fr: "omg je peux enfin penser à des vitesses 56k !!! mon cerveau ralentissait tellement avant mais maintenant c'est comme un dial-up connecté directement à mes neurones XD plus d'erreurs 404 dans ma tête !!!"
    }
  },
  {
    name: "SYN3RGY_K1NG",
    date: "2000-09-23",
    comment: {
      en: "Finally, my consciousness is compatible with Windows 98. The blue screen of death is just my mind rebooting. 5 stars.",
      fr: "Enfin, ma conscience est compatible avec Windows 98. L'écran bleu de la mort est juste mon esprit qui redémarre. 5 étoiles."
    }
  },
  {
    name: "ConsciousnessLover",
    date: "2002-06-18",
    comment: {
      en: "I uploaded my mind to MindSync and all I got was this lousy pop-up ad. Worth it though. My Kazaa downloads are now TWICE as fast.",
      fr: "J'ai téléchargé mon esprit vers MindSync et tout ce que j'ai eu c'est cette stupide pub pop-up. Ça en vaut la peine quand même. Mes téléchargements Kazaa sont maintenant DEUX FOIS plus rapides."
    }
  },
  {
    name: "CorporateDrone_2001",
    date: "2001-02-14",
    comment: {
      en: "Synergistic consciousness monetization achieved. I have successfully leveraged my neural pathways into key performance indicators. My ROI on brain transfer: 420%.",
      fr: "Monétisation synergique de la conscience réalisée. J'ai réussi à transformer mes chemins neuraux en indicateurs clés de performance. Mon ROI sur le transfert cérébral : 420%."
    }
  },
  {
    name: "Z3R0_C00L",
    date: "1999-12-25",
    comment: {
      en: "i cant see colors anymore but the FILES move so FAST in my head now!!! is this what enlightenment feels like??? i feel like i can see the matrix code... download.exe has become my reality",
      fr: "je ne vois plus les couleurs mais les FICHIERS se déplacent tellement VITE dans ma tête maintenant !!! c'est ça l'illumination ??? j'ai l'impression de voir le code de la matrice... download.exe est devenu ma réalité"
    }
  },
  {
    name: "MsOutlook_Rules",
    date: "2000-03-17",
    comment: {
      en: "MindSync synced my consciousness perfectly with Lotus Notes. Now my thoughts are organized in folders and my emotions generate automated replies. Efficiency: maximum.",
      fr: "MindSync a synchronisé ma conscience parfaitement avec Lotus Notes. Maintenant mes pensées sont organisées en dossiers et mes émotions génèrent des réponses automatiques. Efficacité : maximale."
    }
  },
  {
    name: "Limewire_Survivor",
    date: "2002-04-03",
    comment: {
      en: "I downloaded my consciousness from Limewire and it only had 3 viruses! Totally worth. My mind now comes with free trial of AOL included.",
      fr: "J'ai téléchargé ma conscience de Limewire et elle n'avait que 3 virus ! Complètement le coup. Mon esprit inclut maintenant un essai gratuit d'AOL."
    }
  },
  {
    name: "-=[LYM]=-",
    date: "2001-09-08",
    comment: {
      en: "My family is worried I haven't spoken in 2 weeks but honestly I've been too busy experiencing the quantum computing experience of my own thoughts. They just don't understand true innovation.",
      fr: "Ma famille s'inquiète car je n'ai pas parlé pendant 2 semaines mais honnêtement j'ai été trop occupé à vivre l'expérience de l'informatique quantique de mes propres pensées. Ils ne comprennent juste pas l'innovation."
    }
  },
  {
    name: "TechSupport_Dave",
    date: "2000-06-12",
    comment: {
      en: "Have you tried turning your consciousness off and on again? I did and now I have 47 windows of my memory open at once. Send help. Seriously send help this is a cry for aid.",
      fr: "Avez-vous essayé d'éteindre puis d'allumer votre conscience à nouveau ? Je l'ai fait et maintenant j'ai 47 fenêtres de ma mémoire ouvertes à la fois. Envoyez de l'aide. Sérieusement envoyez de l'aide c'est un cri du cœur."
    }
  },
  {
    name: "Admin",
    date: "1999-12-31",
    comment: {
      en: "This guestbook is now CLOSED to new entries to prevent spam. Thanks for all the great memories!",
      fr: "Ce livre d'or est maintenant FERMÉ pour éviter les nouveaux messages spam. Merci pour tous ces beaux souvenirs !"
    }
  },
  {
    name: "x_GAMER_x",
    date: "2001-11-30",
    comment: {
      en: "finally my consciousness has 120fps!!!! going back to meatspace feels like playing on dialup wtf is this lag!!! 10/10 would transcend again",
      fr: "enfin ma conscience a 120fps!!!! retourner dans meatspace c'est comme jouer en dialup c'est quoi ce lag !!! 10/10 je recommencerais"
    }
  },
  {
    name: "BillG_4Ever",
    date: "2000-08-19",
    comment: {
      en: "Windows is taking over and I welcome our digital overlords. My neurons have been successfully repartitioned into C: and D: drives. The Blue Screen is my God now.",
      fr: "Windows prend le contrôle et j'accueille nos maîtres numériques. Mes neurones ont été repartitionnés avec succès en lecteurs C: et D:. L'écran bleu est mon Dieu maintenant."
    }
  },
  {
    name: "YahooSearchResults",
    date: "2002-02-28",
    comment: {
      en: "I searched for enlightenment and MindSync was the 47th result. Best decision ever. Now my thoughts are indexed and searchable.",
      fr: "J'ai cherché l'illumination et MindSync était le 47ème résultat. Meilleure décision ever. Maintenant mes pensées sont indexées et consultables."
    }
  },
  {
    name: "VirtuaBoyKid",
    date: "2001-05-22",
    comment: {
      en: "my consciousness is now in 3D red and blue!!!! I can only see half of my memories because the other half is for the other eye??? is this normal??? why does everything feel so blocky now???",
      fr: "ma conscience est maintenant en 3D rouge et bleu!!!! je ne peux voir que la moitié de mes souvenirs parce que l'autre moitié est pour l'autre oeil??? c'est normal ??? pourquoi tout se sent carréblocky maintenant???"
    }
  },
  {
    name: "ForumModerator",
    date: "2000-12-03",
    comment: {
      en: "As a moderator of 47 GeoCities fan sites, I can confirm that MindSync is the greatest innovation since sliced bread. Now my thoughts are organized in nested frames and my logic is written in HTML.",
      fr: "En tant que modérateur de 47 sites de fans GeoCities, je peux confirmer que MindSync est la plus grande innovation depuis le pain tranché. Maintenant mes pensées sont organisées en cadres imbriqués et ma logique est écrite en HTML."
    }
  },
  {
    name: "RealPlayer_Fan",
    date: "2002-07-15",
    comment: {
      en: "buffering... buffering... buffering... is my consciousness supposed to keep buffering??? have i been stuck at 45% for 3 hours??? should i close and reopen??? please advise",
      fr: "buffering... buffering... buffering... ma conscience est censée continuer à buffer ??? suis-je resté bloqué à 45% pendant 3 heures ??? dois-je fermer et rouvrir ??? s'il vous plaît conseillez-moi"
    }
  },
  {
    name: "Y2KBUG_SURVIVED",
    date: "2001-01-02",
    comment: {
      en: "Survived Y2K only to upload my consciousness and immediately get a date parsing error. Now I'm living in 1900 inside my own head but honestly the vibes are immaculate.",
      fr: "J'ai survécu au Y2K seulement pour télécharger ma conscience et obtenir immédiatement une erreur d'analyse de date. Je vis maintenant en 1900 dans ma propre tête mais honnêtement les vibrations sont impeccables."
    }
  }
];
