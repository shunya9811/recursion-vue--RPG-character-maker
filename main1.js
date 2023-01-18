var config = {
    initialAbility : {
        strength : 10,
        agility : 10,
        resilience : 10,
        wisdom : 10,
        luck : 10
    }
}

var app = new Vue({
    el: "#app",
    data() {
        return {
            profile: {
                name: "Unknown",
                job: "Hero",
                jobs: [
                    {code: 1, label: 'Hero'},
                    {code: 2, label: 'Warrior'},
                    {code: 3, label: 'Mage'}
                ],
                gender: "Male",
                trait: "Everyman",
                traits: [
                    {code: 1, label: "Everyman"},
                    {code: 2, label: "Bat out of hell"},
                    {code: 3, label: "Brave"},
                    {code: 4, label: "Lucky devil"},
                    {code: 5, label: "Tomboy"}
                ]
            },
            status: {
                strength: 10,
                agility: 10,
                resilience: 10,
                wisdom: 10,
                luck: 10
            }
        }
    },
    methods: {
        inputCharacterName: function($event){
            this.profile.name = $event.target.value;
        },
        img_format: (job, gender) => './images/' + gender.toLowerCase()  + "-" + job.toLowerCase()  +'.png'
    },
    watch : {
        'profile.trait' : function(newTrait, oldTrait){
            //初期化
            this.status.strength = config.initialAbility.strength;
            this.status.agility = config.initialAbility.agility;
            this.status.resilience = config.initialAbility.resilience;
            this.status.wisdom = config.initialAbility.wisdom;
            this.status.luck = config.initialAbility.luck;

            if (newTrait === "Bat out of hell"){
                this.status.agility *= 1.4;
            } else if (newTrait === "Brave"){
                this.status.strength *= 1.1;
                this.status.resilience *= 1.1;
                this.status.luck *= 1.2;
            } else if (newTrait === "Lucky devil"){
                this.status.luck *= 1.5;
            } else if (newTrait === "Tomboy"){
                this.status.strength *= 1.1;
                this.status.resilience *= 1.2;
            }
        },
        'profile.gender' : function(newgender, oldgender){
            //初期化
            this.status.strength = config.initialAbility.strength;
            this.status.agility = config.initialAbility.agility;
            this.status.resilience = config.initialAbility.resilience;
            this.status.wisdom = config.initialAbility.wisdom;
            this.status.luck = config.initialAbility.luck;

            this.profile.trait = "EveryMan";
        }
    }

});





//-----------------------------------------------------------
// 関数
//-----------------------------------------------------------

//名前の変更　→　プロフィールの名前を変更

//性別の変更　→　現在のクラスと同じで性別の違う画像に変更　&　性別を変更

//クラスの変更　→　現在の性別と同じで、クラスの違う画像に変更　&　クラス名を変更

//性格の変更　→　クラス、性別を取得してそれに応じたステータスを変更　&　性格名を変更