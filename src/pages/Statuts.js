import React from 'react';

const Statuts = () => {
    let number = 0
    const convertKey = (key) => {
        if(key === 0) return 'One'
        if(key === 1) return 'One'
        if(key === 2) return 'Two'
        if(key === 3) return 'Three'
        if(key === 4) return 'Four'
        if(key === 5) return 'Five'
        if(key === 6) return 'Six'
        if(key === 7) return 'Seven'
        if(key === 8) return 'Height'
        if(key === 9) return 'Nine'
        if(key === 10) return 'Ten'
        if(key === 11) return 'Eleven'
        if(key === 12) return 'Twelve'


    }
    
    const titres = [
        {id:0, numero:'', libelle:'PREAMBULE'},
        {id:1, numero:'TITRE I', libelle: 'CREATION-DENOMINATION –FORME- SIEGE - OBJET - DUREE'},
        {id:2, numero:'TITRE II', libelle: 'APPORT -CAPITAL SOCIAL – FORME DES ACTIONS – DROITS ET OBLIGATIONS ATTACHES AUX ACTIONS'},
        {id:3, numero:'TITRE III', libelle: 'CESSION- NULLITE  DES CESSIONS-TRANSMISSION- NANTISSEMENT- DETENTION DES ACTIONS EN UNE SEULE MAIN'},
        {id:4, numero:'TITRE IV', libelle: 'GESTION - SURVEILLANCE'},
        {id:5, numero:'TITRE V', libelle: 'DECISIONS COLLECTIVES DES ASSOCIES'},
        {id:6, numero:'TITRE VI', libelle: 'EXERCICE SOCIAL – COMPTES SOCIAUX – AFFECTATION ET REPARTITION DU RESULTAT'},
        {id:7, numero:'TITRE VII', libelle: 'DISSOLUTION - LIQUIDATION DE LA SOCIETE- VARIATION DES CAPITAUX- TRANSFORMATION'},
        {id:8, numero:'TITRE VIII', libelle: 'CONTESTATIONS- DISPOSITIONS LEGALES IMPERATIVES'},
        {id:9, numero:'IX', libelle: 'PUBLICITE- FRAIS'}
    ]

    const articles = [
        {id:1, idtitre:0, numero:'', libelle:'Il est établi les présents statuts de la Société par Actions Simplifiée devant exister entre elle et toute autre personne qui acquerrait ultérieurement la qualité d’associé, dont l’organisation et le fonctionnement sont régis par la législation en vigueur en République Démocratique du Congo (« RDC »), notamment les dispositions impératives de l’Acte Uniforme du 30 janvier 2014 relatif au droit des sociétés commerciales et du groupement d’intérêt économique («l’Acte Uniforme ») ainsi que par toutes autres dispositions légales et réglementaires instituant un régime particulier dérogatoire, complémentaires ou modificatives, applicables en la matière. '},
        {id:2, idtitre:1, numero:'1', entete:'CREATION ET DENOMINATION SOCIALE', libelle:`
        1.1	Les Associés fondateurs créent une société par actions simplifiée, dénommée ACB 92 SAS, («la Société »). 
        1.2	La dénomination sociale doit figurer sur tous les actes et documents émanant de la Société et destinés aux tiers, notamment les lettres, les factures, les annonces et publications diverses. Elle doit être précédée ou suivie immédiatement en caractères lisibles de l’indication de la forme de la société, du montant de son capital social, de l’adresse de son siège social et de la mention de son immatriculation au Registre du Commerce et du Crédit Mobilier.
        1.3	La dénomination sociale peut être modifiée dans les conditions requises par l’Acte Uniforme pour la modification des Statuts.`},
        {id:3, idtitre:1, numero:'2', entete:'SIEGE', libelle:"2.1 	Le siège social est établi au n° de l’avenue Bismarck, 2ème niveau, Immeuble Start-Up, Commune de la Gombe, Ville de Kinshasa en République Démocratique du Congo. <br/> 2.2 	Le siège social de la Société peut être modifié dans les conditions requises par les présents Statuts ; toutefois, il pourra être transféré en tout autre endroit de la Ville de Kinshasa sur simple décision du Président. <br/>2.3	Le Président pourra décider de l’ouverture des sièges administratifs, succursales, agences, sièges d'exploitation tant en République Démocratique du Congo qu’à l’étranger. <br/>"},
        {id:4, idtitre:1, numero:'3', entete:'OBJET', libelle:`3.1 	La  Société  a  pour  objet  directement ou indirectement, en  République  Démocratique   du   Congo les prestations de services divers, à savoir notamment :
        ●	Le tranport des personnes et des biens ;
        ●	(Prière de compléter la liste )
        
        3.2 	Elle pourra exercer son activité dans la gestion de tous biens immobiliers. Elle effectuera les études, la recherche de financement, l’élaboration et la surveillance de tout projet immobilier qu’il soit industriel, commercial, privé ou autre nature.
        
        3.3 	Elle pourra prendre une participation directe ou indirecte  de la Société à toutes opérations industrielles ou immobilières pouvant se rattacher à l’un des objets précités par voies de création de sociétés nouvelles, d’apport, de souscription ou d’achat de titres ou droits sociaux, de prise d’intérêt, de fusion, d’association.
        
        3.4	Elle pourra, en outre, accomplir, en République Démocratique du Congo ou à l’étranger, tous actes quelconques et toutes opérations financières, industrielles, commerciales et mobilières ayant un rapport direct ou indirect avec son objet social ou pouvant faciliter la réalisation de son objet social.
        
        3.5	Elle peut également, sans que cette énumération ne soit limitative, faire construire, acquérir, aliéner, prendre en location tous immeubles ou fonds de commerce, tous brevets et licences, s’intéresser de toutes manières, à la fusion, à l’absorption ou à l’apport de tout ou partie d’activités dont l’objet serait similaire, analogue ou connexe au sien, ou qui serait susceptible de constituer, pour elle, une source de débouchés.
        
        3.6	Elle pourra, par ailleurs, gérer toutes entreprises et sociétés dans lesquelles elle aurait des intérêts, prêter ou emprunter des fonds en vue de la conclusion de toutes affaires, donner et recevoir toutes garanties, s’intéresser par voie d’association, d’apports, de fusion, de souscription, ou de toutes autres manières, à toutes entreprises ou sociétés quelle qu’en soit l’activité, vendre les participations et intérêts qu’elle aurait acquis.
        
        3.7	L’objet de la Société ainsi défini, pourra à tout moment être modifié par l’Assemblée Générale délibérant dans les conditions prescrites pour les modifications des statuts.
        `},
        {id:5, idtitre:1, numero:'4', entete:'DUREEE', libelle:`La durée de la Société est de quatre vingt dix neuf (99) années à compter de son immatriculation au Registre du Commerce et du Crédit Mobilier, sauf cas de prorogation ou de dissolution anticipée prévus aux présents statuts.`},
        {id:6, idtitre:2, numero:'5', entete:'CAPITAL SOCIAL', libelle:`5.1	Le capital social est fixé à mille dollars Américains (1.100 USD) représenté par dix (55) actions d’une valeur nominale de cent dollars américains (10 USD).

        5.2	Le capital est souscrit  par les associés de la manière suivante :



        5.3	Les associés déclarent et reconnaissent que chaque action a été libérée intégralement en numéraire et que la somme de mille cent dollars américains (1.100 USD) se trouve actuellement à la disposition de la société.
       `},
        {id:7, idtitre:2, numero:'6', entete:'MODIFICATION DU CAPITAL SOCIAL', libelle:`6.1	Le capital social ne pourra être augmenté, par la création d’actions nouvelles attribuées en représentation d’apports numéraires, ou par l’incorporation de réserves ou de primes d’émission.

        6.2	Le capital ne peut être augmenté ou réduit que par une décision collective des associés statuant sur le rapport du Président.
        
        6.3	Par application aux dispositions qui précèdent, les décisions collectives sur l’augmentation du capital par majoration du nominal des titres ou par incorporation de réserves, bénéfices ou primes d’émission sont votées conformément aux dispositions de l’article 18 des présents statuts.
        
        6.4	Les  actions nouvelles devront être entièrement souscrites et intégralement libérées dès leur création.
        6.5	En cas d’augmentation du capital social avec émission des actions nouvelles, l’Assemblée Générale fixe les conditions de l’émission et du droit de souscription des actions.
        
        6.6	En cas d'augmentation du capital en numéraire ou d'émission de valeurs mobilières donnant accès au capital ou donnant droit à l'attribution de titres de créances, les associés ont, proportionnellement au montant de leurs actions, dans les conditions et délai déterminés par l’Assemblée Générale, un droit de préférence à la souscription des nouveaux titres émis. 
        
        6.7	Les actions qui n’ont pas été absorbées par l’exercice du droit de préférence peuvent être souscrites par des tiers agréés par les associés.
        
        6.8	L’Assemblée Générale peut subordonner l’augmentation du capital social au paiement d’une prime dont elle détermine le montant et l’affectation.
        
        6.9	Aucune action nouvelle ne peut être acquise en dessous de sa valeur nominale.
        `},
        {id:8, idtitre:2, numero:'7', entete:'FORME DES ACTIONS', libelle:`7.1	La Société ne pouvant faire appel public à l'épargne, les valeurs mobilières émises par celle-ci sont obligatoirement nominatives.

        7.2	Elles sont inscrites en compte conformément à la réglementation en vigueur et aux usages applicables.
        
        7.3	Tout associé peut demander à la Société la délivrance d'une attestation d'inscription en compte.
        `},
        {id:9, idtitre:2, numero:'8', entete:'DROITS ET OBLIGATIONS RATTACHES AUX ACTIONS', libelle:`8.1	Les droits de chaque associé dans la société résulteront seulement des présentes actions, des actes qui pourront augmenter le capital social ou modifier les présents statuts et des cessions ou mutations de parts ultérieures qui interviendraient régulièrement.

        8.2	Une copie ou un extrait de ces actes et pièces pourra être délivré à chaque associé sur sa demande et à ses frais.
        
        8.3	Toute action, donne droit dans les bénéfices et l'actif social, à une part nette proportionnelle à la quotité de capital qu'elle représente. Elle donne droit également dans les boni de liquidation ainsi qu’à une voix dans tous les votes et délibérations
         
        8.4	Les associés ne supportent les pertes qu'à concurrence de leurs apports.
        
        8.5	Les actions sont indivisibles à l'égard de la Société. Les copropriétaires indivis doivent se faire représenter auprès de la Société par l'un d'entre eux ou par un mandataire unique désigné en justice en cas de désaccord. 
        8.6	Le droit de vote attaché aux actions démembrées appartient au nu-propriétaire pour toutes les décisions collectives, sauf pour celles concernant l'affectation des bénéfices de l'exercice où il est réservé à l'usufruitier. 
        
        8.7	Les copropriétaires indivis, héritiers ou ayants-droit d'un associé décédé, sont tenus de se faire représenter auprès de la société par l'un d'eux.
        `},
        {id:10, idtitre:3, numero:'9', entete:'CESSION ET NANTISSEMENT DES ACTIONS', libelle:`9.1	Les actions sont librement cessibles entre associés, leurs conjoints et leurs enfants.

        9.2	Elle ne peuvent être cédées, à titre onéreux ou à titre gratuit, à un cessionnaire n’ayant déjà la qualité d’associé et quel que soit son degré de parenté avec le cédant qu'avec l'agrément préalable de la collectivité des associés statuant à la majorité des voix des associés disposant du droit de vote. 
        
        9.3	Toute cession d’actions doit être soumise à l’approbation de la majorité des associés non cédants, représentant  plus de la moitié des voix, déduction faite des parts cédées.
        
        9.4	La demande d'agrément doit être notifiée par lettre recommandée avec demande d'avis de réception adressée au Président de la Société et indiquant le nombre d'actions dont la cession est envisagée, le prix de la cession, les nom, prénoms, adresse, nationalité de l'acquéreur ou s'il s'agit d'une personne morale, son identification complète (dénomination, siège social, numéro RCCM, montant et répartition du capital, identité de ses dirigeants sociaux). Cette demande d'agrément est transmise par le Président aux associés. 
        
        9.5	Le Président dispose d'un délai de trois (3) mois à compter de la réception de la demande d'agrément pour faire connaître au Cédant la décision de la collectivité des associés. 
        
        9.6	Cette notification est effectuée par lettre recommandée avec demande d'avis de réception. 
        
        9.7	A défaut de réponse dans le délai ci-dessus, l'agrément sera réputé acquis. 
        
        9.8	Les décisions d'agrément ou de refus d'agrément ne sont pas motivées.
        
        9.9	En cas d'agrément, l'associé cédant peut réaliser librement la cession aux conditions notifiées dans sa demande d'agrément. Le transfert des actions doit être réalisé au plus tard dans les 30 jours de la décision d'agrément : à défaut de réalisation du transfert dans ce délai, l'agrément serait frappé de caducité. 
        
        9.10	En cas de refus d'agrément, la Société est tenue dans un délai d’un (1) mois à compter de la notification du refus d'agrément, d'acquérir ou de faire acquérir les actions de l'associé cédant par un ou plusieurs tiers agréés selon la procédure ci-dessus prévue. 
        
        9.11	Si le rachat des actions n'est pas réalisé du fait de la Société dans ce délai d'un mois; l'agrément du ou des cessionnaires est réputé acquis. 
        
        9.12	En cas d'acquisition des actions par la Société, celle-ci est tenue dans un délai de six (6) mois à compter de l'acquisition de les céder ou de les annuler. 
        
        9.13	Le prix de rachat des actions par un tiers ou par la Société est déterminé d'un commun accord entre les parties. A défaut d'accord, le prix sera déterminé à dire d'expert désigné par accord entre parties ou à défaut par la juridiction compétente du siège social de la Société.
        
        9.14	La cession est opposable à la Société par la signification de la cession par acte extrajudiciaire (a), soit acceptation de la cession par la Société dans un acte authentique (b), soit au dépôt d’un original de l’acte de cession au siège social contre remise par le Président d’une attestation de ce dépôt (c).  
        
        9.15	La cession n’est opposable aux tiers qu’après l’accomplissement de l’une des formalités énumérées à l’alinéa précédent, modification des statuts et publicité au Registre du  Commerce et du Crédit Mobilier. 
        
        9.16	En cas de consentement de la Société à un projet de nantissement des parts sociales, conformément aux conditions des cessions aux  tiers, ce consentement emporte agrément du cessionnaire en cas de réalisation forcée des parts sociales régulièrement nanties.
        
        9.17	Pour être opposable aux tiers, le nantissement des parts sociales peut être constaté par un acte notarié ou par acte sous seing privé signifié à la Société et publié au Registre du Commerce et Crédit Mobilier.
        `},
        {id:11, idtitre:3, numero:'10', entete:`NULLITE DES CESSIONS D'ACTIONS`, libelle:`10.1	Toutes les cessions d'actions effectuées en violation des dispositions des présents statuts sont nulles.  Au surplus, une telle cession constitue un juste motif d'exclusion.`},
        {id:12, idtitre:3, numero:'11', entete:'TRANSMISSION DES ACTIONS', libelle:`Les actions sont librement transmissibles par voie de succession ou en cas de liquidation de communauté de biens entre époux. 

        11.2	Dans ce cas, les nouveaux propriétaires devront, dans le plus bref délai, justifier à la Société de leur état civil, de leurs qualités et de la propriété, divise ou indivise, des actions du défunt par la production de titres réguliers. L’exercice des droits aux actions de l’associé intéressé est subordonné à la production de ces justifications.
        
        11.3	En cas de décès d’un associé, les héritiers ou ayants droit ne deviennent associés qu’après avoir été agréés dans les conditions et suivant la procédure prévue pour les cessions à des tiers.
        `},
        {id:13, idtitre:3, numero:'12', entete:'DETENTION DES ACTIONS EN UNE SEULE MAIN', libelle:`La détention par un seul associé de toutes les actions n'entraîne pas la dissolution de la société. Ladite société deviendra une Société par Actions Simplifiée Unipersonnelle.`},
        {id:14, idtitre:4, numero:'13', entete:'GESTION DE LA SOCIETE', libelle:`13.1 Organes de la Société
        La Société est dirigée par un Président, nommé par décision collective des associés, qui détient les pouvoirs les plus étendus pour agir en son nom et pour son compte. 
        
        La collectivité des Associés peut désigner, en outre, plusieurs personnes, pour assister le Président dans l’administration de la Société. A ce titre, ils forment, avec le Président, le Conseil de Gestion et décident collégialement.
        
        Le Président, le cas échéant, conjointement avec le Conseil de Gestion peuvent désigner une ou plusieurs personnes, ayant le titre de Directeur Général et de Directeur Général Adjoint aux fins d’assurer la gestion journalière de la Société. 
        
        Dans le cas de désignation de plusieurs personnes, ces dernières constituent un Comité de Direction sous la supervision du Président et/ou du Conseil de Gestion.
        
        13.2  Président de la Société
        La Société est représentée et dirigée par un Président, personne physique ou morale, associée ou non de la Société.
        13.2-1 Désignation
        Le premier Président de la Société est nommé aux termes d’une résolution prise de la décision collective des associés portant création de la société. 
        
        Lorsque le Président est une personne morale, celle-ci doit obligatoirement désigner un représentant permanent qui doit être une personne physique.
        
        
        13.2-2 Durée des fonctions
        Le Président est nommé pour un mandat de 4 (quatre) ans renouvelable. 
        Le Président peut être révoqué à tout moment, sans qu’il soit besoin d’un juste motif, par décision collective des associés statuant à la majorité ¾ des voix des associés disposant du droit de vote. Cette révocation peut donner droit à une indemnisation.
        
        Par exception aux dispositions qui précèdent, le Président est révoqué de plein droit, sans indemnisation dans les cas suivants :
        - dissolution, mise en redressement ou liquidation judiciaire ou interdiction de gestion du Président personne morale ;
        - exclusion du Président associé ;
        - interdiction de diriger, gérer, administrer ou contrôler une entreprise ou une personne morale, incapacité ou faillite personnelle du Président personne physique.
        
        13.2-3 Rémunération
        La rémunération du Président est fixée chaque année par décision collective des associés.
        
        13.2-4 Pouvoirs
        Le Président dirige la Société et la représente à l'égard des tiers. A ce titre, il est investi de tous les pouvoirs nécessaires pour agir en toute circonstance au nom de la Société, dans la limite de l'objet social et des pouvoirs expressément dévolus par les dispositions légales et les présents statuts aux décisions collectives des associés. Il a également le pouvoir d’agir en justice en demandant ou en défendant pour le compte de la Société. 
        
        13.3 Comité de Direction
        Le Président, le cas échant conjointement avec le Conseil de Gestion, peuvent nommer un Comité de Direction, composé d’un Directeur Général, assisté d’un Directeur Général Adjoint, aux fins d’assurer la gestion journalière de la Société. Dans ce cas, ils constituent un Comité de Direction sous la supervision du Président.
        
        13.4-2 Réunions du Comité de Direction
        Le Comité de Direction se réunit une fois par semaine.
        Sauf en cas de péril de la Société, à mentionner dans le procès-verbal de la réunion, le Comité de Direction ne peut statuer qu’avec la présence de deux tiers de ses membres. Les décisions du Comité de Direction sont prises à la majorité des membres présents ou représentés. En cas d’égalité des voix, la voix du Directeur Général est prépondérante. 
        
        13.4-3 Rémunération des membres du Comité de Direction
        La rémunération des membres du Comité de Direction est fixée chaque année par décision collective des associés, sur proposition du Président.
        
        13.4-4 Pouvoirs du Comité de Direction
        La gestion quotidienne de la Société est exercée par le Comité de Direction sous le contrôle du Président.
        Le Comité de Direction assure, dans la limite des pouvoirs qui lui ont été délégués par le Président, la gestion des affaires courantes de l’entreprise. 
        A cet effet, il prépare les comptes économiques et financiers de l’entreprise. Il dirige et surveille l’ensemble des services. Il se réunit au moins une fois par semaine et toutes les fois que l’intérêt de la société l’exige.
        Toutefois, il est expressément stipulé que le Comité de Direction ne peut faire des emprunts incluant les crédits bancaires, vendre et échanger des immeubles sociaux ou fonds de commerce, constituer une hypothèque sur les immeubles sociaux, concourir à la fondation d'une société, ouvrir de nouveaux magasins ou points de vente, fermer des points de vente, etc. sans une décision du Président.
        
        Le Président ou, en cas d’empêchement de ce dernier, le Directeur Général sur délégation des pouvoirs lui faite par le Président pourra notamment, sous sa signature, faire tous achats et ventes de marchandises et/ou produits marchands, conclure et exécuter tous marchés, dresser tous comptes en banque, caisse, administration, postes,  douanes et service des chèques postaux, y faire tous versements, dépôts ou retraits des sommes, titres, valeurs, lettres ou plis recommandés, assurés ou autres colis et marchandises, payer et recevoir toutes sommes, en donner ou en retirer toutes sommes, en donner ou en retirer toutes quittances ou décharges, à défaut de paiement ou en cas des difficultés quelconques.
        
        Le Président ou, en cas d’empêchement de ce dernier,  le Directeur Général sur délégation des pouvoirs lui faite par le Président pourra également exercer toutes poursuites et introduire toutes instances judiciaires ou arbitrales et y répondre, concilier, traiter, transiger et compromettre, obtenir toutes décisions judiciaires, les faire exécuter, en cas de faillites ou de concordats, faire toutes déclarations, affirmations ou contestations, intervenir à toutes liquidations et répartitions, acquérir des immeubles, contracter tous emprunts par voie d’ouverture de crédit ou autrement, même avec stipulation de voie parée, consentir ou accepter tous gages, nantissements, hypothèques, actions résolutoires, donner mainlevée avec ou sans paiement de toutes inscriptions, saisies, oppositions ou autres empêchements, dispenser le Conservateur des titres fonciers de prendre toutes inscriptions d’office, régler l’envoi des fonds, des réserves ou des prévisions ; conclure et résilier tout contrat de location ; engager et licencier le personnel nécessaire et en fixer la rémunération.
        
        Toutes décisions relatives aux opérations autres que celles rentrant dans la gestion journalière,  l’organisation et la restructuration de la Société, l’achat ou la vente d’immeubles, l’emprunt, le nantissement, la constitution d’hypothèque sont soumises à l’approbation du Président. Le Comité de Direction est chargé de faire trimestriellement rapport de ses activités et de sa gestion au Président.
        `},
        {id:15, idtitre:4, numero:'14', entete:'RESPONSABILITE DES DIRIGEANTS', libelle:`Les dirigeants sont responsables, individuellement ou solidairement, selon le cas, envers la société ou envers les tiers, soit des infractions aux dispositions de la loi, soit des violations des statuts, soit des fautes commises dans leur gestion. 

        Outre l’action en réparation du préjudice subi personnellement, les associés représentant le quart des associés et le quart des actions peuvent, soit individuellement, soit en se groupant, intenter l’action sociale en responsabilité contre les dirigeants.  
        `},
        {id:16, idtitre:4, numero:'15', entete:'COMMISSAIRES AUX COMPTES', libelle:`15.1	Conformément aux dispositions de l’article 853-13 de l’Acte uniforme et lorsque les conditions sont réunies, La collectivité des associés désigne pour le contrôle des comptes sociaux, un ou plusieurs Commissaires aux comptes. Le Commissaire aux comptes doit être invité à participer à toutes les décisions collectives dans les mêmes conditions que les associés. 

        15.2	Il est chargé de la vérification de la sincérité et la concordance avec les états financiers de synthèse, des informations données dans le rapport de gestion. Il fait un rapport à l’Assemblée Générale.
        
        15.3	Les comptes annuels, le rapport de gestion et le cas échéant, les comptes consolidés et le rapport sur la gestion du groupe doivent être tenus au siège social à la disposition du Commissaire aux comptes un mois au moins avant la date limite prévue pour leur envoi à la collectivité des associés.
        `},
        {id:17, idtitre:5, numero:'16', entete:'DECISIONS COLLECTIVES OBLIGATOIRES ', libelle:`16.1	Les décisions collectives sont prises en Assemblées.

        16.2	La collectivité des associés est seule compétente pour prendre les décisions relatives à la transformation de la Société ; la modification du capital social : augmentation, amortissement et réduction ; la fusion, scission, apport partiel d'actifs ; la dissolution ; la nomination des Commissaires aux comptes ; la nomination, rémunération, révocation du Président et des autres dirigeants sociaux ; l’approbation des comptes annuels et affectation des résultats ; l’approbation des conventions conclues entre la Société et ses dirigeants ou associés ; la modification des statuts, y compris transfert du siège social ; la nomination du Liquidateur et décisions relatives aux opérations de liquidation ; et à l’agrément des cessions d'actions.
        `},
        {id:18, idtitre:5, numero:'17', entete:'REGLES DE MAJORITE ', libelle:`17.1	Sauf stipulations spécifiques contraires et expresses des présents statuts, les décisions collectives des associés sont adoptées à la majorité des voix des associés disposant du droit de vote, présents ou représentés. 

        17.2	Sous la même réserve, le droit de vote attaché aux actions est proportionnel à la quotité du capital qu'elles représentent. Chaque action donne droit à une voix au moins. 
        
        17.3	Par exception aux dispositions qui précèdent, les décisions collectives limitativement énumérées ci-après doivent être adoptées à l’unanimité des associés disposant du droit de vote. Il s’agit des décisions relatives à l’augmentation des engagements des associés, et notamment l’augmentation du capital par majoration du montant nominal des titres de capital autrement que par incorporation de réserves, bénéfices ou primes d’émission; la prorogation de la Société ;  la dissolution de la société ; la transformation de la Société en Société d’une autre forme ; la modification des règles relatives à la cession d’actions.
        `},
        {id:19, idtitre:5, numero:'18', entete:'MODALITES DES DECISIONS COLLECTIVES', libelle:`18.1	Les décisions collectives sont prises sur convocation du Président.

        18.2	Elles résultent de la réunion d’une assemblée ou d’une consultation écrite  constatée sur un procès verbal signé par tous les associés. Elles peuvent également être prises par tous moyens de télécommunication électronique. 
        
        18.3	Pendant la période de liquidation de la Société, les décisions collectives sont prises sur convocation ou à l'initiative du Liquidateur. 
        
        18.4	Tout associé a le droit de participer aux décisions collectives, personnellement ou par mandataire, ou à distance, par voie électronique ou visioconférence, dans les conditions prévues par les présents statuts, quel que soit le nombre d'actions qu'il possède. Il doit justifier de son identité et de l'inscription en compte de ses actions au jour de la décision collective.
        `},
        {id:20, idtitre:5, numero:'19', entete:'ASSEMBLEES', libelle:`19.1	Les associés se réunissent en assemblée sur convocation du Président au siège social ou en tout autre lieu mentionné dans la convocation. Toutefois, un ou plusieurs associés représentant plus de 10 % du capital peuvent demander la convocation d'une assemblée. 

        19.2	La convocation est effectuée par tous moyens de communication écrite 15 jours au moins avant la date de la réunion. Elle indique l'ordre du jour. 
        Toutefois, l'assemblée peut se réunir sans délai si tous les associés y consentent.
        
        19.3	L'assemblée est présidée par le Président ou, en son absence par un associé désigné par l'assemblée. Les associés peuvent se faire représenter aux délibérations de l'assemblée par un autre associé ou par un tiers. 
        Les pouvoirs peuvent être donnés par tous moyens écrits et notamment par télécopie. 
        
        19.4	En cas de vote à distance au moyen d'un formulaire de vote électronique, ou d'un vote par procuration donné par signature électronique, celui-ci s'exerce, soit sous la forme d'une signature électronique sécurisée, soit sous la forme d'un procédé fiable d'identification garantissant son lien avec l'acte auquel elle se rattache.  
        
        19.5	L’associé devra au préalable avoir communiqué un spécimen de signature électronique sécurisée propre à lui, créé par des moyens qu’il puisse garder sous son contrôle exclusif et qui garantirait avec l'acte auquel elle s'attache un lien tel que toute modification ultérieure de l'acte soit détectable. 
        
        19.6	Le Président de Séance établit un procès-verbal des délibérations devant contenir les mentions prévues à l'article ci-après.
        `},
        {id:21, idtitre:5, numero:'20', entete:'PROCES-VERBAUX DES DECISIONS COLLECTIVES', libelle:`20.1	Les décisions collectives prises en assemblée doivent être constatées par écrit dans des procès-verbaux établis sur un registre spécial ou sur des feuilles mobiles numérotées. Les procès-verbaux sont signés par le Président de l'Assemblée et par les associés présents. 

        20.2	Les procès-verbaux doivent indiquer la date et le lieu de la réunion, les nom, prénoms et qualité du Président de séance, l'identité des associés présents et représentés, les documents et informations communiqués préalablement aux associés, un résumé des débats, ainsi que le texte des résolutions mises aux voix et pour chaque résolution le sens du vote de chaque associé. 
        
        19.3	En cas de décision collective résultant du consentement unanime de tous les associés exprimé dans un acte, cet acte doit mentionner les documents et informations communiqués préalablement aux associés. Il est signé par tous les associés et retranscrit sur le registre spécial ou sur les feuilles mobiles numérotées visés ci-dessus. 
        `},
        {id:22, idtitre:5, numero:'20', entete:'INFORMATION PREALABLE DES ASSOCIES ', libelle:`20.1	Toute décision des associés doit avoir fait l'objet d'une information préalable comprenant tous les documents et informations permettant aux associés de se prononcer en connaissance de cause sur la ou les résolutions soumises à leur approbation. 

        20.2	Lorsque les décisions collectives doivent être prises en application de la loi sur le ou les rapports du Président et/ou des Commissaires aux comptes, le ou les rapports doivent être communiqués aux associés 15 jours avant la date d'établissement du procès-verbal de la décision des associés. 
        
        20.3	Les associés peuvent à toute époque mais sous réserve de ne pas entraver la bonne marche de la Société, consulter au siège social, et, le cas échéant prendre copie, pour les trois derniers exercices, des registres sociaux, de l'inventaire et des comptes annuels, du tableau des résultats des cinq derniers exercices, des comptes consolidés, s'il y a lieu, des rapports de gestion du Président et des rapports des Commissaires au comptes. 
        
        20.4	S'agissant de la décision collective statuant sur les comptes annuels, les associés peuvent obtenir communication aux frais de la Société des comptes annuels et, le cas échéant, des comptes consolidés du dernier exercice.
        `},
        {id:23, idtitre:5, numero:'21', entete:'DECISIONS COLLECTIVES ORDINAIRES', libelle:`21.1	Les décisions collectives ordinaires sont celles qui ont pour but de statuer sur les états financiers de synthèse de l'exercice écoulé, d'autoriser le Président à effectuer les opérations subordonnées à l'accord préalable des associés, de procéder à la nomination et au remplacement du Président et, le cas échéant, du Commissaire aux comptes, d'approuver les conventions intervenues entre la société et l'un de ses dirigeants ou associés et, plus généralement, de statuer sur toutes les questions qui n'entraînent pas modification des statuts.

        21.2	L'assemblée générale ordinaire annuelle se réunit dans les six mois de la clôture de l'exercice. Le Président peut demander une prolongation de ce délai au président du tribunal de commerce compétent statuant sur requête.
        
        21.3	Dans les assemblées ordinaires ou lors des consultations ordinaires écrites, les décisions sont adoptées par un ou plusieurs associés représentant plus de la moitié du capital social.
        
        21.4	Si cette majorité n'est pas obtenue, les associés sont, selon le cas, convoqués ou consultés une seconde fois et les décisions sont prises à la majorité des votes émis quelle que soit la proportion de capital représentée. 
        `},
        {id:24, idtitre:5, numero:'22', entete:'DECISIONS COLLECTIVES EXTRAORDINAIRES', libelle:`22.1	La collectivité des associés représentant au moins les trois quarts du capital social, peut se réunir en assemblée générale extraordinaire lorsque les questions portent sur les modifications des statuts.

        22.2	Dans les assemblées extraordinaires, les décisions sont adoptées par un ou plusieurs associés représentant les deux tiers (2/3) du capital social.
        
        22.3	Toutefois, les décisions reprises à l’article 16.3 sont prises à l'unanimité des associés disposant du droit de vote.
        `},
        {id:25, idtitre:6, numero:'23', entete:'EXERCICE SOCIAL', libelle:`23.1	L'exercice social commence le  premier janvier et finit le trente-et-un décembre de chaque année, excepté le premier exercice social qui commence le jour de l'immatriculation de la société au registre du commerce et du crédit mobilier.

        23.2	Chaque année, à la clôture de chaque exercice social, le Président dresse un inventaire des éléments actifs et passifs de la société, les comptes annuels comprenant le bilan, le compte de résultat.
        `},
        {id:26, idtitre:6, numero:'24', entete:'ETABLISSEMENT ET APPROBATION DES COMPTES ANNUELS', libelle:`24.1	Le Président établit les comptes annuels de l'exercice. 

        24.2	Dans les six mois de la clôture de l'exercice, les associés doivent statuer par décision collective sur les comptes annuels, au vu du rapport de gestion et des rapports du ou des Commissaires aux comptes. Lorsque des comptes consolidés sont établis, ils sont présentés avec le rapport de gestion et les rapports des Commissaires aux comptes, lors de cette décision collective. 
        `},
        {id:27, idtitre:6, numero:'25', entete:'AFFECTATION ET REPARTITION DES RESULTATS', libelle:`25.1	Le compte des résultats récapitule les produits et les charges de l'exercice sans qu'il soit tenu compte de leur date d'encaissement ou de paiement. Il fait apparaître par différence après déduction des amortissements ou des provisions, le bénéfice ou la perte de l'exercice.

        25.2	Toute action en l'absence de catégorie d'actions ou toute action d'une même catégorie dans le cas contraire, donne droit à une part nette proportionnelle à la quote-part du capital qu'elle représente, dans les bénéfices et réserves ou dans l'actif social, au cours de l'existence de la Société comme en cas de liquidation. Chaque action supporte les pertes sociales dans les mêmes proportions.
        
        25.3	Sur ce bénéfice, il sera fait un prélèvement de 5% au moins destinés à la formation du fonds de réserve. Ce prélèvement cessera d’être obligatoire lorsque la réserve aura atteint le dixième du capital social.
        
        25.4	Après approbation des comptes et constatation de l'existence d'un bénéfice distribuable, les associés décident sa distribution, en totalité ou en partie, ou son affectation à un ou plusieurs postes de réserves dont ils règlent l'affectation et l'emploi. 
        
        25.5	La décision collective des associés peut décider la mise en distribution de toute somme prélevée sur le report à nouveau bénéficiaire ou sur les réserves disponibles en indiquant expressément les postes de réserves sur lesquels ces prélèvements sont effectués. Toutefois, les dividendes sont prélevés par priorité sur le bénéfice distribuable de l'exercice. 
        
        25.6	La décision collective des associés ou, à défaut, le Président, fixe les modalités de paiement des dividendes. 
        
        25.7	Si un exercice accuse des pertes, celles-ci sont, après approbation des comptes de l'exercice, inscrites à un compte spécial figurant à l'actif du bilan pour être imputées à due concurrence sur les bénéfices des exercices ultérieurs, jusqu'à extinction.
        `},
        {id:28, idtitre:7, numero:'26', entete:'DISSOLUTION - LIQUIDATION DE LA SOCIETE', libelle:`26.1	La Société est dissoute dans les cas prévus par la loi ou en cas de dissolution anticipée décidée par décision collective des associés. 

        26.2	La dissolution de la société n’a d’effet à l'égard des tiers qu'à compter de sa publication au registre du commerce et du crédit mobilier.
        
        26.3	Cette dissolution entraîne de plein droit sa mise en liquidation.
        
        26.4	La personnalité morale de la société subsiste pour les besoins de la liquidation jusqu'à la clôture de celle-ci.
        
        26.5	La décision collective des associés qui constate ou décide la dissolution nomme un ou plusieurs Liquidateurs. L'acte de nomination du liquidateur est publié dans le Journal Officiel.
        
        26.6	La mention «société en liquidation» ainsi que le nom du ou des liquidateurs doivent figurer sur tous les actes et documents émanant de la société et destinés aux tiers.
        
        26.7	Le Liquidateur, ou chacun d'eux s'ils sont plusieurs, représente la Société. Il dispose des pouvoirs les plus étendus pour réaliser l'actif même à l'amiable. Il est habilité à payer les créanciers sociaux et à répartir le solde disponible entre les associés. 
        
        26.8	Les associés peuvent autoriser le Liquidateur à continuer les affaires sociales en cours et à en engager de nouvelles pour les seuls besoins de la liquidation. 
        
        26.9	Le produit net de la liquidation, après apurement du passif, est employé au remboursement intégral du capital libéré et non amorti des actions. 
        
        26.10	Le surplus, s'il en existe, est réparti entre les associés proportionnellement au nombre d'actions de chacun d'eux. Les pertes, s'il en existe, sont supportées par les associés jusqu'à concurrence du montant de leurs apports.
        `},
        {id:29, idtitre:7, numero:'27', entete:'VARIATION DES CAPITAUX PROPRES', libelle:`27.1	Dans les quatre mois qui suivent l'approbation des comptes ayant fait apparaître les pertes entraînant la réduction de l'actif net jusqu'à la moitié du capital social, le gérant ou le cas échéant, le commissaire aux comptes, doit consulter les associés sur l’opportunité de prononcer la dissolution anticipée de la société.

        27.2	Si la dissolution est écartée, la société est tenue, dans les deux ans qui suivent la date de l’exercice déficitaire, de reconstituer ses capitaux propres jusqu’à ce que ceux-ci soient à hauteur de la moitié au moins du capital social.
        `},
        {id:30, idtitre:7, numero:'28', entete:'TRANSFORMATION', libelle:`28.1	La société pourra se transformer en société de toute autre forme sans que cette opération n'entraîne la création d'une personne morale nouvelle.

        28.2	La décision de transformation doit être précédée du rapport du commissaire aux comptes ou du comptable sur la situation de la Société. 
        `},
        {id:31, idtitre:8, numero:'29', entete:'CONTESTATIONS', libelle:`29.1	Les contestations relatives aux affaires sociales, survenant pendant la durée de la Société ou au cours de sa liquidation entre les associés ou entre un associé et la Société, seront soumises au tribunal compétent du lieu du siège social.`},
        {id:32, idtitre:8, numero:'30', entete:'DISPOSITIONS LEGALES IMPERATIVES', libelle:`30.1	Toute stipulation des présents statuts qui serait contraire aux dispositions impératives de l’Acte Uniforme du 30 janvier 2014 relatif au droit des sociétés commerciales et du groupement d’intérêt économique sera réputée non écrite.

        30.2	Par contre, toute disposition impérative dudit Acte Uniforme ne figurant pas aux présents statuts est censée en faire partie intégrante.
        `},
        {id:33, idtitre:9, numero:'31', entete:'FRAIS', libelle:`31.1	Tous les frais, droits et honoraires des présentes et de leurs suites seront supportés par la Société, portés au compte des frais généraux et amortis dans la première année et, en tout cas, avant distribution de bénéfices.`},
        {id:34, idtitre:9, numero:'32', entete:'JOUISSANCE DE LA PERSONNALITE JURIDIQUE - CLAUSE DE MANDAT', libelle:`32.1	Conformément à la loi, la société jouira de la personnalité juridique à compter de son immatriculation au Registre du Commerce et du Crédit Mobilier.
                                                          
        32.2	Les Soussignées conviennent de donner mandat et pouvoir spécial à Maîtres ……………, prestant au sein du Cabinet OVK LAW FIRM situé au numéro 3 de l’avenue Bismarck dans la Commune de la GOMBE, pouvant agir collectivement ou l’un à défaut de l’autre, à l'effet de présenter les présents statuts de même que la déclaration de souscription devant le notaire compétent en vue de leur authentification et déposer les statuts ainsi que la déclaration de souscription notariés au greffe du Tribunal de commerce de Kinshasa/Gombe et de procéder à toutes les autres formalités légales requises.
        `},
    ]
    return (
        <div className='statuts-container main'>
            <h1 className='text-center'>STATUTS</h1>
            {console.log(convertKey(10))}
            <p><a href="./ACB92_Statuts.docx">Télécharger version word 👇🏿👇🏿 </a></p>

            <div className="accordion" id="accordionExample">
                {titres
                .map((titre, index, key=id) => (
                    <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading${convertKey(titre.id)}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${convertKey(titre.id)}`} aria-expanded="true" aria-controls={`collapse${convertKey(titre.id)}`}>
                            {titre.numero} {titre.numero && ':'} {titre.libelle}
                        </button>
                    </h2>
                    <div id={`collapse${convertKey(titre.id)}`} className="accordion-collapse collapse show" aria-labelledby={`heading${convertKey(titre.id)}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div>
                                {articles
                                    //.filter((article) => article.idtitre.includes(1))
                                    .map((article) => (
                                        <div>
                                            {titre.id==article.idtitre && (
                                                <div>
                                                    <p>Article {article.numero} : {article.entete}</p>
                                                    <p>{article.libelle}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
            <p>Ainsi fait à Kinshasa, le ……………. 2022, en six exemplaires originaux dont deux pour l’enregistrement auprès du Notaire, un au Registre du Commerce et du Crédit Mobilier, et un au siège social de la Société.</p>
            <p>LES ASSOCIES</p>
        </div>
    );
};

export default Statuts;