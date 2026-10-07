class ContestPage {
    constructor(page) {
        this.page = page;

        this.dailyChallenge = page.getByRole('heading', { name: 'Daily Challenge' }).locator('..');
        this.weeklyChampionship = page.getByRole('heading', { name: 'Weekly Championship' }).locator('..');
        this.startContest=page.getByRole('button',{name:'Start Contest 🚀'});
    }

    async attemptDailyChallenge() {
        const attemptedToday=this.dailyChallenge.getByRole('button', { name: /Attempted Today/ });

        if(await attemptedToday.count()>0){
            console.log("Daily Challenge already attempted Today");
            return;
        }
        else{
            await this.dailyChallenge.getByRole('button', { name: 'Attempt Contest' }).click();
            await this.startContest.click();
            await this.page.getByRole('button',{name:'×',exact:true}).click();
        }
    }

    async attemptWeeklyChampionship() {
        const attemptedToday=this.weeklyChampionship.getByRole('button', { name: /Attempted Today/ });

        if(await attemptedToday.count()>0){
         console.log("Weekly Championship already attempted Today");
         return;
        }
        else{
            await this.weeklyChampionship.getByRole('button', { name: 'Attempt Contest' }).click();
            await this.startContest.click();
        }
    }
}

module.exports = { ContestPage };