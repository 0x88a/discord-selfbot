const {
    RichEmbed
} = require('discord.js')
module.exports = {
    name: 'thoughts',
    description: 'Returns mentioned users compliment.',
    execute(msg, args, discord) {
        let user = msg.mentions.users.first()
        if (!user) user = msg.author
        let replies = [
            "Worked",
            "First, I’d bend you over and see if the back is as magnificent as the front!",
            "me too ;)",
            "I’m aiming for the butthole ma’am",
            "I dunno what’s better, thighs or hips.",
            "So am I...I'd love to play. Please post more",
            "I mean YUM....but addicted to what?",
            "Would have to give the butthole a try",
            "Think your ass needs some tongue :tongue:",
            "Unzips....again",
            "Mine as well",
            "I'd ram home. My fantasy",
            "I'm sure she would love knowing that!",
            "I want to bounce on it",
            "And I'll drink every delicious drop!:yum::smiling_face_with_3_hearts:",
            "Thank you so much &lt;3",
            "Yup",
            "I am now",
            "Yum",
            "You definitely can, but I can't guarantee a comfortable ride :face_with_hand_over_mouth::smirk:",
            "Yes :smiling_imp::smiling_imp:",
            "There's worse addictions ;)",
            "Damn girl, you’ve have such a sexy body:relaxed:",
            "I remember this from an old comedian. His answer was “depends on which direction she is facing”",
            "And what do you want in return?",
            "Oh yes",
            "What happened to user Eveninginparis? Just saw her profile today and loved it. Been posting for like a month and an hour later she deleted her account. Hope she didn't get doxed or something.",
            "Gorgeous body",
            "You wont get cleaner;)",
            "Tell her. She is gorgeous!",
            "Is there anything you wouldn’t do with me? Tommy, do you have a line?",
            "Your gonna need to take of the bra and jeans, otherwise your hot body will have tan lines!",
            "Most definitely!",
            "That ass is addictive",
            "If by love you mean lick then and tease them until you're moaning for more then yes, they absolutely can.",
            "I would love to",
            "Amazing booty. Would love to see more of these.",
            "I guess I hopped on Reddit at the right time :wink:",
            ":astonished: thonggobbler :fire::peach:",
            "I wanna be your skirt and wear me",
            "Holy tits, Batman :heart_eyes::heart_eyes::heart_eyes::drooling_face:",
            "Ok, this may be the one that r/ShinyClits would really love! :heart:",
            "How do we feel about spreading those cheeks next time?",
            "Come here bitch and lets see if you can really take it like you say",
            "I'd be in, then out, then in and repeat until you know when....:wink:",
            "See through yoga pants in a provocative position :)",
            "*raises hand and erection",
            "You do know it is going in your butt right:smiling_imp:?",
            "Those tits :drooling_face::heart_eyes:",
            "Love it! So hot!",
            "Like I'd do anything to cum inside",
            "Very nice",
        ]

        let random = Math.floor(Math.random() * replies.length)

        let embed = new RichEmbed()
            .setTitle(`Insult machine`)
            .setDescription(`${user.tag}, \n${replies[random]}`)
            .setColor("RANDOM")

        msg.channel.send(embed)
    }
}