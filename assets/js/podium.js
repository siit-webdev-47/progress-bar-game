export class DrawPodium{
    constructor(players, parentDomElem){
        this.players = players;
        this.orderedPlayers = this.players;
        const placeString = 'I';

        this.createComponent(parentDomElem);
    // --- To start with default players on podium --
        //this.renderScore();
        
    }

    createComponent(parentDomElem){
        this.container = document.createElement('div');
        this.container.classList.add('podiumContainer');
        parentDomElem.append(this.container);
        
        this.renderPlace(2);
        this.renderPlace(1);
        this.renderPlace(3);

       
    }

    renderScore(){
        this.orderedPlayers = this.players.sort((a,b) => b.score - a.score);

        for (let i = 1; i <= 3; i++) {
        eval(`this.p${i}NameSpan.textContent = this.orderedPlayers[${i-1}].name`);
        eval(`this.p${i}Podium.style.borderColor = this.orderedPlayers[${i-1}].color`);
        // eval(`this.p${i}Podium.style.color = this.orderedPlayers[${i-1}].color`);
        eval(`this.p${i}Img.src = this.orderedPlayers[${i-1}].avatar`);

        // --- For displaying also the score on podium

        // eval(`this.p${i}PodSpan.textContent = this.orderedPlayers[${i-1}].score`);
        // eval(`this.scoreText${i}.textContent = "Score: "`);    

        //  For displaying also the score on podium  ---
        }

    }

    renderPlace(i){
        eval(`this.place${i} = document.createElement('div')`);
        eval(`this.container.append(this.place${i})`);

        eval(`this.p${i}Avatar = document.createElement('div')`);
        eval(`this.p${i}Avatar.classList.add('playerPodium', 'p${i}')`);
        // eval(`this.p${i}Avatar.style.borderColor = this.orderedPlayers[${i-1}].color`);
        eval(`this.place${i}.append(this.p${i}Avatar)`);

        eval(`this.p${i}NameSpan = document.createElement('span')`);
        eval(`this.p${i}NameSpan.classList.add('score')`);
        eval(`this.p${i}Avatar.append(this.p${i}NameSpan)`);

        eval(`this.p${i}Img = document.createElement('img')`);
       // eval(`this.p${i}Img.src = this.orderedPlayers[${i-1}].avatar`);
        eval(`this.p${i}Avatar.append(this.p${i}Img)`);


                // --- For displaying also the score on podium

        // eval(`this.p${i}ScoreDiv = document.createElement("div")`);
        // eval(`this.p${i}Avatar.append(this.p${i}ScoreDiv)`);

        // eval(`this.scoreText${i} = document.createTextNode(" ")`);
        // eval(`this.p${i}ScoreDiv.append(this.scoreText${i})`);

        // eval(`this.p${i}PodSpan = document.createElement('span')`);
        // eval(`this.p${i}PodSpan.classList.add('score')`);
        // eval(`this.p${i}ScoreDiv.append(this.p${i}PodSpan)`);
        
                //  For displaying also the score on podium  ---

        eval(`this.p${i}Podium = document.createElement('div')`);
        eval(`this.p${i}Podium.classList.add('podium', 'p${i}')`);
        eval(`this.place${i}.append(this.p${i}Podium)`);

        eval(`this.p${i}Podium.textContent = "I".repeat(${i})`);
    }
}