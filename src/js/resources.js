import {ImageSource, Sound, Resource, Loader, Color} from 'excalibur'
import rokkettPlayer from '../images/rokkett.png'
import backGround from '../images/background.png'
import sun from '../images/sun.png'
import gameOver from '../images/game-over.png'
import murderBox from '../images/murderbox.png'
import murderBox2 from '../images/murderbox2.png'
import killerCloud from '../images/killerclowd.png'
import regularBoost from '../images/boost.png'
import killerCloud2 from '../images/killerclowd2.png'
import victory from '../images/victory.png'
import logo from '../images/logo.png'

//wijzig

const Resources = {
    Rokkett : new ImageSource(rokkettPlayer),
    Background : new ImageSource(backGround),
    Sun : new ImageSource(sun),
    GameOver : new ImageSource(gameOver),
    MurderBox : new ImageSource(murderBox),
    MurderBox2 : new ImageSource(murderBox2),
    KillerClowd: new ImageSource(killerCloud),
    KillerClowd2: new ImageSource(killerCloud2),
    RegularBoost: new ImageSource(regularBoost),
    Victory: new ImageSource(victory)
}
const ResourceLoader = new Loader([

    Resources.Rokkett,
    Resources.Background,
    Resources.Sun,
    Resources.GameOver,
    Resources.MurderBox,
    Resources.MurderBox2,
    Resources.KillerClowd,
    Resources.RegularBoost,
    Resources.KillerClowd2,
    Resources.Victory

])

ResourceLoader.logo = logo
ResourceLoader.logoWidth = 512
ResourceLoader.logoHeight = 286
ResourceLoader.backgroundColor = Color.fromHex('#191919')

export { Resources, ResourceLoader }