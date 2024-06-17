import React, { useContext,useState,useEffect } from 'react';
import '../styles/Booklist.css';
import { ThemeContext } from '../context/ThemeContext';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import AtomicImage from '../assets/images/atomic.jpg'; 
import LawsImage from '../assets/images/48Laws.webp';
import AlphaImage from '../assets/images/unplugged alpha.jpg';
import ChemImage from '../assets/images/The ALchemist.jpg';
import AirImage from '../assets/images/when breathbecomes.jpg';
import LeanImage from '../assets/images/Lean start.jpg';
import HomoImage from '../assets/images/Homo dues.jpg';
import SemenImage from '../assets/images/Semen.jpg';
import CantImage from '../assets/images/Cant hurt .jpg';
import MasteryImage from '../assets/images/mastery.jpg';
import MoneyImage from '../assets/images/pschmoney.jpg';
import AmImage from '../assets/images/5am club.jpg';
import RichImage from '../assets/images/Richdad.jpg';
import ConImage from '../assets/images/THe law of confession.jpg';
import FaithImage from '../assets/images/faith fanances.jpg';
import FateImage from '../assets/images/Son-of-Fate.jpg';
import ManImage from '../assets/images/Mans-Search-for-Meaning-nuriakenya.jpg';
import PriestImage from '../assets/images/priest.jpeg';
import WorryImage from '../assets/images/How to stop worrying.jpg';
import LovedImage from '../assets/images/love in the afternoon.jpg';
import AlpaImage from '../assets/images/Alphamale.jpg';
import BuddhiImage from '../assets/images/buddhasim.jpg';
import ComeImage from '../assets/images/Come as you are.jpg';
import PunImage from '../assets/images/crime and punshment.webp';
import CrimeImage from '../assets/images/Mylife in crime.jpg';
import WallImage from '../assets/images/the wall speaks.jpg';
import MammthImage from '../assets/images/mamoth.jpg';
import SubtleImage from '../assets/images/subttle art.jpg';
import BabaImage from '../assets/images/wifes baba.jpg';
import ThornsImage from '../assets/images/THornes and roses.jpg';
import BlackImage from '../assets/images/black-girls-must-die-exhausted-2.jpg';
import RatImage from '../assets/images/Rational male1.webp';
import JobsImage from '../assets/images/Steve jobs.jpg';
import FreedomImage from '../assets/images/Longwalk to freedom.jpg';
import DecoloImage from '../assets/images/DECOLONIZINGTHEMINDnew.webp';
import DecoPdf from '../assets/pdfs/Decolonising the Mind by Wa NGUGI WA THION.pdf';
import CapturedImage from '../assets/images/The_Captured_Mind_by_Czeslaw_Milosz.jpg';
import CapturedPdf from '../assets/pdfs/The Captured Mind - Final Accepted Copy.pdf';
import Ceochinaimage from '../assets/images/cHINA.jpg';
import CeochinaPdf from '../assets/pdfs/CEO, China The Rise of Xi Jinping by Kerry Brown.pdf';
import DeplomacyImage from '../assets/images/Hennry deplomacy.jpg';
import DeplomacyPdf from '../assets/pdfs/Diplomacy (Henry Kissinger).pdf';
import DoomsdayImage from '../assets/images/doomsdayconspirasheld00shel_0001.jpg';
import DoomsdayPdf from '../assets/pdfs/Doomsday Conspiracy with Bonus Material - Sidney Sheldon.pdf';
import MirrorImage from '../assets/images/Stranger in the mirror.jpg';
import MirrorPdf from '../assets/pdfs/Stranger in the Mirror, A - Sidney Sheldon.pdf';
import YourdreamsImage from '../assets/images/Tell me your dreams.jpg';
import YourdreamsPdf from '../assets/pdfs/Tell Me Your Dreams - Sidney Sheldon.pdf';
import NothingforeverImage from '../assets/images/Nothing_Lasts_Forever_(novel).jpg';
import NothingforeverPdf from '../assets/pdfs/Nothing Lasts Forever - Sidney Sheldon(1).pdf';
import NigeriaImage from '../assets/images/chinua-achebe trable in NiGERIA.jpg';
import NigeriaPdf from '../assets/pdfs/The Trouble with Nigeria (Chinua Achebe).pdf';
import ArrowImage from '../assets/images/Arrow of God.jpeg';
import ArrowPdf from '../assets/pdfs/Arrow of God ( PDFDrive ).pdf';
import ApartImage from '../assets/images/THings fall apart.jpg';
import ApartPdf from '../assets/pdfs/Things Fall Apart (Achebe, Chinua) (z-lib.org).pdf';
import LightImage from '../assets/images/Warrior of the light.jpeg';
import StraImage from '../assets/images/33 startegies of war.jpg';
import SuperiorImage from '../assets/images/the way of the superior men.jpg';
import WordsImage from '../assets/images/the power of your words_.jpg';
import SilenceImage from '../assets/images/learning to silence the mind.jpg';
import EmotImage from '../assets/images/emotional intelligence for dummies.jpg';
import HapImage from '../assets/images/StumblingOnHappiness-by-DanielGilbert.jpg';
import AgainImage from '../assets/images/THink reason.jpg';
import ProfitImage from '../assets/images/profit first.jpg';
import FackedupImage from '../assets/images/everything is fucked up.jpg';
import EmotionImage from '../assets/images/emotional intelligence for dummies.jpg';
import ZigImae from '../assets/images/Zigla.jpg';
import TalkImage from '../assets/images/How to talk to anyone.jpg';
import ArtImage from '../assets/images/THe art of war.jpg';
import BloomImage from '../assets/images/blooms guide .jpg';
import LessImage from '../assets/images/THe road less travelled.jpg';
import FortyImage from '../assets/images/40 rules of love.jpg';
import AfricanImage from '../assets/images/African hidden stories.webp';
import Youimage from '../assets/images/Why-You-Act-the-Way-You-Do.jpg';
import UnbornImage from '../assets/images/Rules for my unborn son.jpg';
import AtomicPdf from '../assets/pdfs/Atomic-Habits-.pdf';
import FatePdf from '../assets/pdfs/Son of fate - Kiriamiti, John, 1950- (1).pdf';
import SubbtlePdf from '../assets/pdfs/Mark_Manson_The_Subtle_Art_of_Not_Giving_a_Fuck_Harper_2016.pdf';
import YouPdf from '../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf';
import FreedomPdf from '../assets/pdfs/Long Walk to Freedom_ With Connections ( PDFDrive ).pdf';
import PriestPdf from '../assets/pdfs/Priest.pdf';
import FortyPdf from '../assets/pdfs/The_Forty_Rules_of_Love_A_Novel_of_Rumi_MALIK_MUHAMMAD_PDFDrive_.pdf';
import LawsPdf from '../assets/pdfs/The-48-Laws-of-Power-Robert-Greene.pdf';
import MammothPdf from '../assets/pdfs/The_Mammoth_Book_of_Cover_Ups_The_100_Most_Terrifying_Conspiracies.pdf';
import PunPdf from '../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf';
import BlackPdf from '../assets/pdfs/Black_Girls_Must_Die_Exhausted_A_Novel_for_Grown_Ups_by_Allen_Jayne.pdf';
import AlphaPdf from '../assets/pdfs/The Unplugged Alpha ... by Unknown  Cooper  Ric....pdf';
import LovePdf from '../assets/pdfs/Love In The Afternoon (Kate Speck [Speck, Kate]) (z-lib.org) (2).pdf';
import EmoPdf from '../assets/pdfs/Emotional_Intelligence_For_Dummies_Steven_J_Stein_z_lib_org.pdf';
import AlchemistPdf from '../assets/pdfs/Atomic-Habits-.pdf';
import WarPdf from '../assets/pdfs/The_33_Strategies_of_War.pdf';
import ZigPdf from '../assets/pdfs/Ziglar_on_Selling_The_Ultimate_Handbook_for_the_Complete_Sales_Professional.pdf';
import BreathPdf from '../assets/pdfs/When_Breath_Become.pdf';
// import FuckedPdf from '../assets/pdfs/Mark_Manson_Everything_Is_F_cked_A_Book_About_Hope_Harper_PDFDrive.pdf';
import MalePdf from '../assets/pdfs/John Alexander - How To Become An Alpha Male.pdf';
import MasterPdf from '../assets/pdfs/Atomic-Habits-.pdf'
import BudhPdf from '../assets/pdfs/Why_Buddhism_Is_True_The_Science_and_Philosophy_of_Meditation_and.pdf'
import AnyonePdf from '../assets/pdfs/How to Talk to Anyone ( PDFDrive.com ).pdf';
import LeanPdf from '../assets/pdfs/The-Lean-Startup-.pdf';
import ArtPdf from '../assets/pdfs/The_Art_of_War_Complete_Texts_and_Commentaries_Sun_Tzu,_Thomas_Cleary.pdf';
import ManPdf from '../assets/pdfs/The Way Of The Superior Man.pdf';
import BloomsPdf from '../assets/pdfs/blooms guide.pdf';
import RationalPdf from '../assets/pdfs/The Rational Male by Rollo Tomassi.pdf';
import HomoPdf from '../assets/pdfs/homo_deus_a_brief_history_of_tomorrow_pdf.pdf';
import RoadPdf from '../assets/pdfs/The_Road_Less_Traveled_A_New_Psychology_of_Love,_Traditional_Values.pdf';
import SemenPdf from '../assets/pdfs/Atomic-Habits-.pdf'
import MoneyPdf from '../assets/pdfs/The_Psychology_of_Money_Timeless_lessons_on_wealth,_greed,_and_happiness.pdf';
import BabaPdf from '../assets/pdfs/The Secret Lives of Baba Segi\'s Wives ( PDFDrive ).pdf';
import JobPdf from '../assets/pdfs/Steve Jobs by Isaacson, Walter.pdf';
import AmPdf from '../assets/pdfs/The 5AM Club by Robin Sharma (z-lib.org).pdf';
import WordsPdf from '../assets/pdfs/The power of your Words..E W. Kenyon & Don Gossett.pdf';
import ComePdf from '../assets/pdfs/Come-as-You-Are-The-Surprising-New-Science.pdf';
import DadPdf from '../assets/pdfs/Rich Dad Poor Dad ( PDFDrive ).pdf';
import CantPdf from '../assets/pdfs/Atomic-Habits-.pdf'
import ConfPdf from '../assets/pdfs/The Law of Confession..Bill Wiston.pdf';
import CrimePdf from '../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf';
import FaithPdf from '../assets/pdfs/Faith for Finances Kenyon & Don Gossett.pdf';
import SearchPdf from '../assets/pdfs/Man\'s Search For Meaning.pdf';
import WorryPdf from '../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf';
import ThornPdf from '../assets/pdfs/A Court of Thorns and Roses By Sarah J Maas-pdfread.net.pdf'
import AfriPdf from '../assets/pdfs/africans.pdf';
import LightPf from '../assets/pdfs/Atomic-Habits-.pdf';
import WallPdf from '../assets/pdfs/The wall speaks.pdf';
import LearnPdf from '../assets/pdfs/toaz_info_learning_to_silence_the_mind_wellness_through_meditation.pdf';
import YourEmoPdf from '../assets/pdfs/Master Your Emotions A Practical Guid... (Z-Library).pdf';
import YourEmoImage from '../assets/images/mastery.jpg'
import ProfitPdf from '../assets/pdfs/Profit_first_a_simple_system_to_transform_any_business_from_a.pdf';
import HapPdf from '../assets/pdfs/Stumbling_on_Happiness_Stumbling_on_Happiness_Stumbling_on_Happiness.pdf';
import AgaPdf from '../assets/pdfs/Think again.pdf';
import UnbornPdf from '../assets/pdfs/Rules for My Unborn Son   ( PDFDrive ).pdf';
import DrivenImage from '../assets/images/The purpose driven life .jpg';
import DrivenPdf from '../assets/pdfs/The_Purpose_Driven_Life_What_on_Earth_Am_I_Here_For_PDFDrive_.pdf';
import FriendsImage from '../assets/images/how-to-win-friends-and-influence-people-original-imag964nvzaxkrya.webp';
import FriendsPdf from '../assets/pdfs/Revised_Dale_Carnegie_How_to_win_friends_and_influence_people_1981.pdf';
import TeachImage from '../assets/images/I-Will-Teach-You-to-Be-Rich.jpg';
import TechPdf from '../assets/pdfs/I Will Teach You To Be Rich ( PDFDrive ).pdf';
import EuropeImage from '../assets/images/How Europe Under.jpg';
import EuropePdf from '../assets/pdfs/How_Europe_Underdeveloped_Africa_Walter_Rodney_1973_PDFDrive_.pdf';
import DictImage from '../assets/images/The dictionary of body language.jpg';
import DictPdf from '../assets/pdfs/The_Dictionary_of_Body_Language_A_Field_Guide_to_Human_Behavior.pdf';
import PowernImage from '../assets/images/The power of now.jpg';
import PowernPdf from '../assets/pdfs/The power of now_eng.pdf';
import CrisisIMage from '../assets/images/The Pschology of a crisis.png';
import CrisisPdf from '../assets/pdfs/Psychology_of_a_Crisis.pdf';
import BridgeImage from '../assets/images/Bridge to heaven.jpg';
import BridgePdf from '../assets/pdfs/Bridge to Haven by Francine Rivers.pdf';
import IdiotsImage from '../assets/images/Surrounded-by-Idiots-nuriakenya.png';
import IdiotsPdf from '../assets/pdfs/Surrounded by Idiots .pdf';
import BattlesImage from '../assets/images/Win your inner battles.jpg';
import BattlesPdf from '../assets/pdfs/win-your-inner-battles-defeat-the-enemy-within-and.pdf';
import HabitsImage from '../assets/images/The power of habits.jpg';
import HabitsPdf from '../assets/pdfs/The_Power_of_Habit_Why_We_Do_What_We_Do_in_Life_and_Business_PDFDrive.pdf';
import TheBuzImage from '../assets/images/The business of the 21 centry.jpeg';
import TheBuzPdf from '../assets/pdfs/The Business of the 21st Century ( PDFDrive ).pdf';
import CheeseImage from '../assets/images/Who moved my cheese.jpg';
import CheesePdf from '../assets/pdfs/Who Moved My Cheese_ ( PDFDrive ).pdf';
import FrogImage from '../assets/images/Eat that frog.jpeg';
import FrogPdf from '../assets/pdfs/Eat_That_Frog_21_Great_Ways_to_Stop_Procrastinating_and_Get_More.pdf';
import StartzImage from '../assets/images/start from zero.jpg';
import StartzPdf from '../assets/pdfs/Start_From_Zero_Build_Your_Own_Business_and_Experience_True_Freedom.pdf';
import MillionImage from '../assets/images/The millionare mindset.jpg';
import MillionPdf from '../assets/pdfs/The Millionaire Mindset - Mission Improvement ( PDFDrive ).pdf';
import BedImage from '../assets/images/Make your bed_.jpg';
import BedPdf from '../assets/pdfs/Make-your-Bed-PDF.pdf';
import SucpeopleImage from '../assets/images/How successful people think.jpg';
import SucpeoplePdf from '../assets/pdfs/Howsuccessfulpeoplethink.pdf';
import MeditationImage from '../assets/images/Meditation by marcus.jpg';
import MeditationPdf from '../assets/pdfs/Marcus Aurelius Meditations ( PDFDrive ).pdf';
import ManipultatedImage from '../assets/images/the manipulated man.jpg';
import ManipultatedPdf from '../assets/pdfs/The Manipulated Man ( PDFDrive ).pdf';
import TopImage from '../assets/images/See you at the top.jpg';
import TopPdf from '../assets/pdfs/See You At The Top ( PDFDrive ).pdf';
import ThinkethImage from '../assets/images/The the man thinketh.jpg';
import ThinkethPdf from '../assets/pdfs/As a Man Thinketh ( PDFDrive ).pdf';
import ThinkrichImage from '../assets/images/THink anfd grow rich.jpg';
import ThinkrichPdf from '../assets/pdfs/Think And Grow Rich ( PDFDrive ).pdf';
import NoniceImage from '../assets/images/NO more mr nice guy.jpg';
import NonicePdf from '../assets/pdfs/No More Mr. Nice Guy by Robert Glover - 7Chan ( PDFDrive ).pdf';
import UnlimitedsucImage from '../assets/images/Unlimited sales success.jpeg';
import UnlimitedsucPdf from '../assets/pdfs/Unlimited_Sales_Success_12_Simple_Steps_for_Selling_More_Than_You.pdf';
import CashflowImage from '../assets/images/Rich dad cash quard.jpg';
import CashflowPdf from '../assets/pdfs/Rich_Dad’s_CASHFLOW_Quadrant_Rich_Dad’s_Guide_to_Financial_Freedom.pdf';
import MistakemadeImage from '../assets/images/Mistakes made.jpg';
import MistakemadePdf from '../assets/pdfs/Mistakes Made by Marie James.pdf';
import JustkeepImage from '../assets/images/Just keep buying\'.jpg';
import JustkeepPdf from '../assets/pdfs/Just_Keep_Buying.pdf';
import SapienImage from '../assets/images/sapien.jpg';
import SapienPdf from '../assets/pdfs/Sapiens.pdf';
import Habits8Image from '../assets/images/The 8th Hanit.jpg';
import Habits8Pdf from '../assets/pdfs/The 8th Habit From Effectiveness to Greatness.pdf';
import RomeoIMage from '../assets/images/Romeo and Juliet.jpeg';
import RomeoPdf from '../assets/pdfs/Romeo and Juliet .pdf';
import LostleaderImage from '../assets/images/African lost leader.jpg';
import LostleaderPdf from '../assets/pdfs/Patrice Lumumba_ Africa\'s Lost Leader ( PDFDrive ).pdf';
import SpiesImage from '../assets/images/How spies works.jpg';
import SpiesPdf from '../assets/pdfs/How-Spies-Think.pdf';
import AperfectIMage from '../assets/images/A perfect life.jpg';
import AperfectPdf from '../assets/pdfs/A Perfect Life by Danielle Steel.pdf';
import MoveImage from '../assets/images/Your next 5 moves.jpg';
import MovePdf from '../assets/pdfs/your-next-five-moves-by-patrick-bet-david_compress.pdf';
import FeministImage from '../assets/images/The feminist lie.jpg';
import FeministPdf from '../assets/pdfs/The_Feminist_Lie_It_Was_Never_About_Equality_Bob_Lewis_z_lib_org.pdf';
import KindworthImage from '../assets/images/KInd worthy killing.jpg';
import KindworthPdf from '../assets/pdfs/The Kind Worth Killing-Peter Swanson.pdf';
import BiafraIMage from '../assets/images/the-biafra-story-1.jpg';
import BiafraPdf from '../assets/pdfs/The Biafra Story ( PDFDrive ).pdf';
import FarmishedImage from '../assets/images/the farmished road.jpg';
import FarmishedPdf from '../assets/pdfs/The Famished Road (Ben Okri).pdf';
import YellowImage from '../assets/images/half of a yellow.jpg';
import YellowPdf from '../assets/pdfs/Half_of_a_Yellow_Sun_by_Chimamanda_Ngozi_Adichie_Adichie,_Chimamanda.pdf';
import HumanImage from '../assets/images/THe law of human nature.jpeg';
import HumanPdf from '../assets/pdfs/The Laws of Human Nature (Robert Greene).pdf';
import CountryImage from '../assets/images/There was a country.jpeg';
import CountryPdf from '../assets/pdfs/There_Was_a_Country_A_Personal_History_of_Biafra_by_Achebe_Chinua.pdf';
import LaidplanImage from '../assets/images/Best laid plans.jpg';
import LaidplanPdf from '../assets/pdfs/Sidney Sheldon - Best Laid plans.pdf';
import WildImage from '../assets/images/The call of the wild.jpeg';
import WildPdf from '../assets/pdfs/The-Call-of-the-Wild-by-Jack-London.pdf';
import AnglesImage from '../assets/images/Rage of the angle .jpg';
import AnglePdf from '../assets/pdfs/Sidney Sheldon - Rage Of Angels(1).pdf';
import MidnightImage from '../assets/images/Memories of the night.jpg';
import MidnightPdf from '../assets/pdfs/Sidney Sheldon - Memories Of Midnight.pdf';
import SaidImage from '../assets/images/the worlds i wish i said.jpg';
import SaidPdf from '../assets/pdfs/The Words I Wish I Said by caitlin kelly (z-lib.org).pdf';
import DoveImage from '../assets/images/wings of a dove.jpeg';
import DovePdf from '../assets/pdfs/wings_of_a_dove.pdf';
import FallingImage from '../assets/images/The sky is falling.jpg';
import FallingPdf from '../assets/pdfs/Sidney Sheldon - The Sky Is Falling.pdf';
import ComesImage from '../assets/images/If tommorow comes.jpeg';
import ComesPdf from '../assets/pdfs/Sidney Sheldon - If Tomorrow Comes.pdf';
import MartianImage from '../assets/images/The_Martian_(Weir_novel).jpg';
import MartianPdf from '../assets/images/The_Martian_(Weir_novel).jpg';
import WomenLoveImage from '../assets/images/women in love.jpeg';
import WomenLovePdf from '../assets/pdfs/women-in-love.pdf';
import NewyouImage from '../assets/images/Have a new you by friday.jpg';
import NewyouPdf from '../assets/pdfs/Have_a_New_You_by_Friday_How_to_Accept_Yourself,_Boost_Your_Confidence.pdf';
import SellingImage from '../assets/images/THe art of selling to the affluent.jpeg';
import SellingPdf from '../assets/pdfs/The_Art_of_Selling_to_the_Affluent_How_to_Attract,_Service,_and.pdf';
import HopeinfrontImage from '../assets/images/Hope infront of me.jpg';
import HopeinfrontPdf from '../assets/images/Hope infront of me.jpg';
import BornontuesdayImage from '../assets/images/born-tuesday.webp';
import BornontuesdayPdf from '../assets/pdfs/Born on a Tuesday (Elnathan John) (z-lib.org).pdf';
import DevilImage from '../assets/images/outwitting-the-devil-napoleon-hill.jpg';
import DevilPdf from '../assets/pdfs/Outwitting_the_Devil_Napoleon_Hill_PDF_Archive_PDFDrive_1.pdf';
import VanishedImage from '../assets/images/Vanished.jpeg';
import VanishedPdf from '../assets/pdfs/Vanished ( PDFDrive ).pdf';
import AnimalImage from '../assets/images/Animal farm.jpg';
import AnimalPdf from '../assets/pdfs/Animal Farm by George Orwellb.pdf';
import PowerPrayerImage from '../assets/images/PowerMarriage.jpg';
import PowerPrayerPdf from '../assets/pdfs/The_Power_Of_Prayer_To_Change_Your_Marriage_Stormie_Omartian_Christiandiet.pdf';
import ChristBibImage from '../assets/images/Bibble hygine.jpg';
import ChristBibPdf from '../assets/pdfs/Christian Temperance and Bible Hygiene.pdf';
import NoraImage from '../assets/images/Searching for Nora.jpg';
import Norapdf from '../assets/pdfs/Searching for Nora - Wendy W. Swallow.pdf';
import SpeechesImage from '../assets/images/selected speeches.jpg';
import SpeechesPdf from '../assets/pdfs/Selected_Writings_and_Speeches_of_Marcus_Garvey_Marcus_Garvey_1.pdf';
import SexualImage from '../assets/images/sexual chemistry.jpg';
import SexualPdf from '../assets/pdfs/Sexual_Chemistry_What_It_Is,_How_to_Use_It_Julius_Fast_z_lib_org.pdf';
import UniteImage from '../assets/images/Africa must unite.jpg';
import UnitePdf from '../assets/pdfs/Africa-Must-Unite-Kwame-Nkrumah.pdf';
import ThelawImage from '../assets/images/The 50th law.jpg';
import ThelawPdf from '../assets/pdfs/The 50th Law (Robert Greene, 50 Cent) (z-lib.org).pdf';
import BabylonImage from '../assets/images/The richest man in Babylon.jpeg';
import BabylonPdf from '../assets/pdfs/The Richest Man In Babylon (George S. Clason) (z-lib.org).pdf';
import MoonImage from '../assets/images/Flowers in the moon.jpg';
import MoonPdf from '../assets/pdfs/Flowers On The Moon by Billy Chapata (z-lib.org).pdf'
import FruitrianImage from '../assets/images/Frutarian.webp';
import FruitrianPdf from '../assets/pdfs/Fruitarians_are_The_Future_Full_Guide_to_Mono_Meals_and_Fruitarian.pdf'
import NakedfaceImage from '../assets/images/Naked face.jpg';
import NakedfacePdf from '../assets/pdfs/Sidney Sheldon - The Naked Face.pdf';
import GoldfishImage from '../assets/images/Gold fish.jpg';
import GoldfishPdf from '../assets/pdfs/Goldfish Have No Hiding Place ( PDFDrive ).pdf';
import ThewinnerImage from '../assets/images/The winner stands alone.jpg';
import ThewinnerPdf from '../assets/pdfs/The Winner Stands Alone.pdf';
import ArtleaderImage from '../assets/images/The art of leadership.jpg';
import ArtleaderPdf from '../assets/images/THe art of selling to the affluent.jpeg';
import WorkingemoImage from '../assets/images/working with emotional intelligence.jpg';
import WorkingemoPdf from '../assets/images/working with emotional intelligence.jpg';
import UniversityImage from '../assets/images/University of success.jpg';
import UniversityPdf from '../assets/pdfs/University of Success ( PDFDrive ).pdf';
import FinancebilImage from '../assets/images/The-Finance-Bill-Article-image.jpg';
import FinancebilPdf from '../assets/pdfs/BDO-Kenya-The-2024-Finance-Bill-Analysis.pdf';
import TitanImage from '../assets/images/Titans.jpg';
import TitanPdf from '../assets/pdfs/Titan by Ron Chernow.pdf';
import MaoImage from '../assets/images/Mao tse.jpg';
import MaoPdf from '../assets/pdfs/Mao selected works vol 1.pdf';
import LotusImage from '../assets/images/A lotus .jpg';
import LotusPdf from '../assets/pdfs/A Lotus For Miss Quon.pdf';
import WormsImage from '../assets/images/A can of worms.jpeg';
// import WormsPdf from '../assets/pdfs/james hadley a can of worms ( PDFDrive ).pdf';










// Updated books array with correct paths to PDF files
const books = [
  {
    picture: AtomicImage,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: "Self Help",
    availability: true,
    read:AtomicPdf,
    Download: '../assets/pdfs/Atomic-Habits-.pdf'
  },
  {
    picture: FateImage,
    title: 'Son Of Fate',
    author: 'John Kiriamiti',
    genre: "Fiction",
    availability: true,
    read:FatePdf,
    Download: require('../assets/pdfs/Son of fate - Kiriamiti, John, 1950- (1).pdf')
  },
  {
    picture: FinancebilImage,
    title: 'Kenya Finance Bill',
    author: 'Kenyan Government',
    genre: "Gorvernance",
    availability: true,
    read:FinancebilPdf,
    Download: require('../assets/pdfs/BDO-Kenya-The-2024-Finance-Bill-Analysis.pdf')
  },
  {
    picture: NakedfaceImage,
    title: 'The Naked Face',
    author: 'Sidney Sheldon',
    genre: "Fiction",
    availability: true,
    read: NakedfacePdf,
    Download: require('../assets/pdfs/Sidney Sheldon - The Naked Face.pdf')
  },
  
  {
    picture: Youimage,
    title: 'Why you act the way you do',
    author: 'Tim LaHaye',
    genre: "Self Help",
    availability: true,
    read: YouPdf,
    Download: require('../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf')
  },
  {
    picture: FallingImage,
    title: 'The Sky Is Falling',
    author: 'Sidney Sheldon',
    genre: "Fiction",
    availability: true,
    read: FallingPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - The Sky Is Falling.pdf')
  },
  {
    picture: MammthImage,
    title: 'The Mammoth Book Of Cover-Ups',
    author: 'John E Lewis',
    genre: "Conspirancies",
    availability: true,
    read:MammothPdf,
    Download: require('../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf')
  },
  {
    picture: AnimalImage,
    title: 'Animal Farm',
    author: "George Orwell",
    genre: "Satire",
    availability: true,
    read:AnimalPdf,
    Download: require('../assets/pdfs/Animal Farm by George Orwellb.pdf')
  },
  {
    picture: LotusImage,
    title: 'A Lotus Miss Quon',
    author: "James Handley",
    genre: "Satire",
    availability: true,
    read:LotusPdf,
    Download: require('../assets/pdfs/A Lotus For Miss Quon.pdf')
  },
  {
    picture: PowernImage,
    title: 'The Power Of Now',
    author: 'Eckhart Tolle',
    genre: "Self help",
    availability: true,
    read:PowernPdf,
    Download: require('../assets/pdfs/The power of now_eng.pdf')
  },
  {
    picture: ComesImage,
    title: 'If Tomorrow Comes',
    author: 'Sidney Sheldon',
    genre: "Thriller",
    availability: true,
    read: ComesPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - If Tomorrow Comes.pdf')
  },
  {
    picture: PowerPrayerImage,
    title: 'The Power Of Prayer To Change Your Marriage',
    author: 'Stormie Omaritian',
    genre: "Christian literature",
    availability: true,
    read:PowerPrayerPdf,
    Download: require('../assets/pdfs/The_Power_Of_Prayer_To_Change_Your_Marriage_Stormie_Omartian_Christiandiet.pdf')
  },
  {
    picture: GoldfishImage,
    title: 'Goldfish Have No Hiding Place',
    author: 'James Hadley',
    genre: "Mystery",
    availability: true,
    read: GoldfishPdf,
    Download: require('../assets/pdfs/Goldfish Have No Hiding Place ( PDFDrive ).pdf')
  },
  {
    picture: SucpeopleImage,
    title: 'How Successful People Think',
    author: 'John Maxwell',
    genre: "Self help",
    availability: true,
    read:SucpeoplePdf,
    Download: require('../assets/pdfs/Howsuccessfulpeoplethink.pdf')
  },
  {
    picture: WormsImage,
    title: 'Animal Farm',
    author: "George Orwell",
    genre: "Satire",
    availability: true,
    read:WordsPdf,
    Download: require('../assets/pdfs/james hadley a can of worms ( PDFDrive ).pdf')
  },
  {
    picture: ChristBibImage,
    title: 'Christian Temperance And Bibble Hygine',
    author: 'Ellen G White',
    genre: "Christian Literature",
    availability: true,
    read:ChristBibPdf,
    Download: require('../assets/pdfs/Christian Temperance and Bible Hygiene.pdf')
  },
  {
    picture: CashflowImage,
    title: 'Rich Dad\'s Cash Flow Quadrant',
    author: 'Robert Kiyosaki',
    genre: "Business",
    availability: true,
    read:CashflowPdf,
    Download: require('../assets/pdfs/Rich_Dad’s_CASHFLOW_Quadrant_Rich_Dad’s_Guide_to_Financial_Freedom.pdf')
  },
  {
    picture: Habits8Image,
    title: 'The 8th Habit From Effectiveness to Greatness',
    author: 'Stephen R. Covey',
    genre: "Self Help",
    availability: true,
    read:Habits8Pdf,
    Download: require('../assets/pdfs/The 8th Habit From Effectiveness to Greatness.pdf')
  },
  {
    picture: NoraImage,
    title: 'Searching For Nora',
    author: 'Wendy Swallow',
    genre: "Historical Fiction",
    availability: true,
    read:Norapdf,
    Download: require('../assets/pdfs/Searching for Nora - Wendy W. Swallow.pdf')
  },
  {
    picture: FreedomImage,
    title: 'Long Walk To Freedom',
    author: 'Nelson Mandela',
    genre: "Autobiography",
    availability: true,
    read:FreedomPdf,
    Download: require('../assets/pdfs/Long Walk to Freedom_ With Connections ( PDFDrive ).pdf')
  },
  {
    picture: ThewinnerImage,
    title: 'The Winner Stands Alone',
    author: 'Paulo Coelho',
    genre: "Self Help",
    availability: true,
    read: ThewinnerPdf,
    Download: require('../assets/pdfs/The Winner Stands Alone.pdf')
  },
  {
    picture: RomeoIMage,
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    genre: "Love",
    availability: true,
    read:RomeoPdf,
    Download: require('../assets/pdfs/Romeo and Juliet .pdf')
  },
  {
    picture: DecoloImage,
    title: 'Decolonize The Mind ',
    author: 'Ngugi Wa Thiong\'o',
    genre: "Self Help",
    availability: true,
    read:DecoPdf,
    Download: require('../assets/pdfs/Decolonising the Mind by Wa NGUGI WA THION.pdf')
  },
  {
    picture: SpeechesImage,
    title: 'Selected Writting And Speeches Of Marcus Garvey',
    author: 'Bob Blaisdell',
    genre: "Fiction",
    availability: true,
    read:SpeechesPdf,
    Download: require('../assets/pdfs/Selected_Writings_and_Speeches_of_Marcus_Garvey_Marcus_Garvey_1.pdf')
  },
  {
    picture: ArtleaderImage,
    title: 'The Art Of Leadership',
    author: 'Heward Mills',
    genre: "Self Help",
    availability: true,
    read: ArtleaderPdf,
    Download: require('../assets/pdfs/The Art of Leadership - Dag Heward-Mills.pdf')
  },
  {
    picture: MartianImage,
    title: 'The Martian',
    author: 'Andy Weir',
    genre: "Science Fiction",
    availability: true,
    read:MartianPdf,
    Download: require('../assets/pdfs/The_Martian.pdf')
  },
  {
    picture: CrisisIMage,
    title: 'Pschychology Of Crisis',
    author:'CERC',
    genre: "Self Help",
    availability: true,
    read:CrisisPdf,
    Download: require('../assets/pdfs/Psychology_of_a_Crisis.pdf')
  },
  {
    picture: WorkingemoImage,
    title: 'Working With Emotional Intelligence',
    author: 'Daniel Goleman',
    genre: "Self Help",
    availability: true,
    read: WorkingemoPdf,
    Download: require('../assets/pdfs/Why you act the way you do by Tim LaHaye ( PDFDrive ).pdf')
  },
  {
    picture: KindworthImage,
    title: 'The Kind Worth Killing',
    author:'Peter Swgnson',
    genre: "Thriller",
    availability: true,
    read:KindworthPdf,
    Download: require('../assets/pdfs/The Kind Worth Killing-Peter Swanson.pdf')
  },
  {
    picture: LostleaderImage,
    title: 'Africa/s Lost Leader',
    author: 'Patrice Lumumba',
    genre: "Non-fiction",
    availability: true,
    read:LostleaderPdf,
    Download: require('../assets/pdfs/Patrice Lumumba_ Africa\'s Lost Leader ( PDFDrive ).pdf')
  },
  {
    picture: SexualImage,
    title: 'Sexual Chemisrty',
    author: 'Julius Fast',
    genre: "Romance",
    availability: true,
    read:SexualPdf,
    Download: require('../assets/pdfs/Sexual_Chemistry_What_It_Is,_How_to_Use_It_Julius_Fast_z_lib_org.pdf')
  },
  {
    picture: TitanImage,
    title: 'Titan',
    author: 'Ron Chernow',
    genre: "Science",
    availability: true,
    read:TitanPdf,
    Download: require('../assets/pdfs/Titan by Ron Chernow.pdf')
  },
  {
    picture: UniversityImage,
    title: 'University Of Success',
    author: 'OG Mandinos',
    genre: "Self Help",
    availability: true,
    read: UniversityPdf,
    Download: require('../assets/pdfs/University of Success ( PDFDrive ).pdf')
  },
  {
    picture: MeditationImage,
    title: 'Meditation',
    author: 'Marcus Aurelius',
    genre: "Stoicism",
    availability: true,
    read:MeditationPdf,
    Download: require('../assets/pdfs/Marcus Aurelius Meditations ( PDFDrive ).pdf')
  },
  {
    picture: MaoImage,
    title: 'Selected Works Of Mao-Tse-Tung',
    author: 'Mao',
    genre: "Philosopy",
    availability: true,
    read:MaoPdf,
    Download: require('../assets/pdfs/Mao selected works vol 1.pdf')
  },
  {
    picture: PriestImage,
    title: 'Priest',
    author: 'Sierra Simone',
    genre: "Erotic Romance",
    availability: true,
    read:PriestPdf,
    Download: require('../assets/pdfs/Priest.pdf')
  },
  {
    picture: UniteImage,
    title: 'Africa Must Unite',
    author: 'Kwame Nkrumah',
    genre: "History",
    availability: true,
    read:UnitePdf,
    Download: require('../assets/pdfs/Africa-Must-Unite-Kwame-Nkrumah.pdf')
  },
  {
    picture: SpiesImage,
    title: 'How Spies Work',
    author: 'David Omand',
    genre: "Spy-Fiction",
    availability: true,
    read:SpiesPdf,
    Download: require('../assets/pdfs/How-Spies-Think.pdf')
  },
  {
    picture: DrivenImage,
    title: 'The Purpose Driven Life',
    author: 'Rick Warren',
    genre: "Self Help",
    availability: true,
    read:DrivenPdf,
    Download: require('../assets/pdfs/The_Purpose_Driven_Life_What_on_Earth_Am_I_Here_For_PDFDrive_.pdf')
  },
  {
    picture: WomenLoveImage,
    title: 'Women In Love',
    author: 'D.H Lawrence',
    genre: "Romance",
    availability: true,
    read:WomenLovePdf,
    Download: require('../assets/pdfs/women-in-love.pdf')
  },
  {
    picture: ThelawImage,
    title: 'The 50th Law',
    author: '50 Cent and Robert Greene',
    genre: "Self Help",
    availability: true,
    read:ThelawPdf,
    Download: require('../assets/pdfs/The 50th Law (Robert Greene, 50 Cent) (z-lib.org).pdf')
  },
  {
    picture: BiafraIMage,
    title: 'The Biafra Story',
    author:'Frederick Forsyth',
    genre: "Biography",
    availability: true,
    read:BiafraPdf,
    Download: require('../assets/pdfs/The Biafra Story ( PDFDrive ).pdf')
  },
  {
    picture: NewyouImage,
    title: 'Have A New You By Friday',
    author: 'Rick Warren',
    genre: "Self Help",
    availability: true,
    read:NewyouPdf,
    Download: require('../assets/pdfs/The_Purpose_Driven_Life_What_on_Earth_Am_I_Here_For_PDFDrive_.pdf')
  },

  {
    picture: FortyImage,
    title: 'Forty Rules Of Love',
    author: 'Elif Shafak',
    genre: "Love",
    availability: true,
    read:FortyPdf,
    Download: require('../assets/pdfs/The_Forty_Rules_of_Love_A_Novel_of_Rumi_MALIK_MUHAMMAD_PDFDrive_.pdf')
  },
  {
    picture: BabylonImage,
    title: 'The Richest Man In Babylon',
    author: 'George Clason',
    genre: "Self Help",
    availability: true,
    read:BabylonPdf,
    Download: require('../assets/pdfs/The Richest Man In Babylon (George S. Clason) (z-lib.org).pdf')
  },
  {
    picture: FarmishedImage,
    title: 'The Farmished Road',
    author: 'Ben Onkri',
    genre: "Fantasy Fiction",
    availability: true,
    read:FarmishedPdf,
    Download: require('../assets/pdfs/The Famished Road (Ben Okri).pdf')
  },
  {
    picture: SellingImage,
    title: 'The Art Of Selling To The Affluent',
    author: 'Matt Oescsli',
    genre: "Business",
    availability: true,
    read:SellingPdf,
    Download: require('../assets/pdfs/The_Art_of_Selling_to_the_Affluent_How_to_Attract,_Service,_and.pdf')
  },
  {
    picture: AperfectIMage,
    title: 'A Perfect Life',
    author: 'Danielle Steel',
    genre: "Inspirational",
    availability: true,
    read:AperfectPdf,
    Download: require('../assets/pdfs/A Perfect Life by Danielle Steel.pdf')
  },
  {
    picture: MoonImage,
    title: 'Flowers On The Moon',
    author: 'Billy Chapata',
    genre: "Poetry",
    availability: true,
    read:MoonPdf,
    Download: require('../assets/pdfs/Patrice Lumumba_ Africa\'s Lost Leader ( PDFDrive ).pdf')
  },
  {
    picture: HopeinfrontImage,
    title: 'Hope In Front Of Me',
    author: 'Danny Gokey',
    genre: "Self Help",
    availability: true,
    read:HopeinfrontPdf,
    Download: require('../assets/pdfs/Hope in Front of Me (Danny Gokey  Ben Stroup) (z-lib.org).pdf')
  },
  {
    picture: LawsImage,
    title: '48 Laws Of Power',
    author: 'Robert Greene',
    genre: 'Self Help',
    availability: true,
    read:LawsPdf,
    Download: require('../assets/pdfs/The-48-Laws-of-Power-Robert-Greene.pdf')
  },
  {
    picture: BornontuesdayImage,
    title: 'Born On Tuesday',
    author: 'Elnathan John',
    genre: "Bildungsroman",
    availability: true,
    read:BornontuesdayPdf,
    Download: require('../assets/pdfs/Born on a Tuesday (Elnathan John) (z-lib.org).pdf')
  },
  {
    picture: YellowImage,
    title: 'Half Of A Yellow Sun',
    author: 'Chimamanda Ngozi',
    genre: "Historical Fiction",
    availability: true,
    read:YellowPdf,
    Download: require('../assets/pdfs/Half_of_a_Yellow_Sun_by_Chimamanda_Ngozi_Adichie_Adichie,_Chimamanda.pdf')
  },
  {
    picture: FruitrianImage,
    title: 'Fruitarians Are The Future',
    author: 'Matthew Warner',
    genre: "Diet book",
    availability: true,
    read:FruitrianPdf,
    Download: require('../assets/pdfs/Fruitarians_are_The_Future_Full_Guide_to_Mono_Meals_and_Fruitarian.pdf')
  },
  {
    picture: ManipultatedImage,
    title: 'The Manipulated Man',
    author: 'Esther Vilar',
    genre: "Masculinity",
    availability: true,
    read:ManipultatedPdf,
    Download: require('../assets/pdfs/The Manipulated Man ( PDFDrive ).pdf')
  },
  {
    picture: MoveImage,
    title: 'Your Next Five Moves',
    author: 'Partric Bet-David',
    genre: "Self Help",
    availability: true,
    read:MovePdf,
    Download: require('../assets/pdfs/your-next-five-moves-by-patrick-bet-david_compress.pdf')
  },
  {
    picture: DevilImage,
    title: 'Outwitting The Devil',
    author: 'Napoleon Hill',
    genre: "Self Help",
    availability: true,
    read:DevilPdf,
    Download: require('../assets/pdfs/Outwitting_the_Devil_Napoleon_Hill_PDF_Archive_PDFDrive_1.pdf')
  },
  {
    picture: NothingforeverImage,
    title: 'Nothing Last Forever',
    author: 'Sidney Sheldon',
    genre: "Crime",
    availability: true,
    read:NothingforeverPdf,
    Download: require('../assets/pdfs/Nothing Lasts Forever - Sidney Sheldon(1).pdf')
  },
  {
    picture: CapturedImage,
    title: 'The Captive Mind',
    author: 'Ian Monger',
    genre: 'Self Help',
    availability: true,
    read:CapturedPdf,
    Download: require('../assets/pdfs/The Captured Mind - Final Accepted Copy.pdf')
  },
  {
    picture: VanishedImage,
    title: 'Vanished',
    author: 'Danielle Steel',
    genre: "Thriller",
    availability: true,
    read:VanishedPdf,
    Download: require('../assets/pdfs/Vanished ( PDFDrive ).pdf')
  },
  {
    picture: FeministImage,
    title: 'The Feminist Lie',
    author: 'Bob Lewis',
    genre: "Feminism",
    availability: true,
    read:FeministPdf,
    Download: require('../assets/pdfs/The_Feminist_Lie_It_Was_Never_About_Equality_Bob_Lewis_z_lib_org.pdf')
  },
  {
    picture: YourEmoImage,
    title: 'Master Your Emotions',
    author: 'Thibaut Meurisse',
    genre: 'Self Help',
    availability: true,
    read:YourEmoPdf,
    Download: require('../assets/pdfs/Master Your Emotions A Practical Guid... (Z-Library).pdf')
  },
  {
    picture: HumanImage,
    title: 'The Laws Of Human Nature',
    author: 'Robert Greene',
    genre: 'Self Help',
    availability: true,
    read:HumanPdf,
    Download: require('../assets/pdfs/The Laws of Human Nature (Robert Greene).pdf')
  },
  {
    picture: PunImage,
    title: 'Crime And Punshment',
    author: 'George Gibian',
    genre: "Psychological Fiction",
    availability: false,
    read:PunPdf,
    Download: require('../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf')
  },
  {
    picture: TopImage,
    title: 'See You At The Top',
    author: 'Zig Ziglar',
    genre: "Self help",
    availability: true,
    read:TopPdf,
    Download: require('../assets/pdfs/See You At The Top ( PDFDrive ).pdf')
  },
  {
    picture: CountryImage,
    title: 'There Was A Country',
    author: 'Chinua Achebe',
    genre: 'Autobiography',
    availability: true,
    read:CountryPdf,
    Download: require('../assets/pdfs/There_Was_a_Country_A_Personal_History_of_Biafra_by_Achebe_Chinua.pdf')
  },
  {
    picture: FriendsImage,
    title: 'How To Win Friends And Influence People',
    author: 'Dale Carnegie',
    genre: "Self Help",
    availability: true,
    read:FriendsPdf,
    Download: require('../assets/pdfs/Revised_Dale_Carnegie_How_to_win_friends_and_influence_people_1981.pdf')
  },
  {
    picture: BlackImage,
    title: 'Black Girls Must Die Exhausted',
    author: 'Jayne Allen',
    genre: "Fiction",
    availability: true,
    read:BlackPdf,
    Download: require('../assets/pdfs/Black_Girls_Must_Die_Exhausted_A_Novel_for_Grown_Ups_by_Allen_Jayne.pdf')
  },
  {
    picture: BridgeImage,
    title: 'Bridge To Heaven',
    author: 'Francine River',
    genre: "Christian Fiction",
    availability: true,
    read:BridgePdf,
    Download: require('../assets/pdfs/Bridge to Haven by Francine Rivers.pdf')
  },
  {
    picture: ThinkethImage,
    title: 'As A Man Thinketh',
    author: 'James Allen',
    genre: "Self help",
    availability: true,
    read:ThinkethPdf,
    Download: require('../assets/pdfs/As a Man Thinketh ( PDFDrive ).pdf')
  },
  {
    picture: LaidplanImage,
    title: 'Best Laid Plans',
    author: 'Sidney Sheldon',
    genre: 'Fiction',
    availability: true,
    read:LaidplanPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - Best Laid plans.pdf')
  },
  {
    picture: AlphaImage,
    title: 'Unplugged Alpha',
    author: 'Richard Cooper',
    genre: "Masculinity",
    availability: true,
    read:AlphaPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: IdiotsImage,
    title: 'Sorrounded By Idiots',
    author: 'Thomas Erikson',
    genre: "Self Help",
    availability: true,
    read:IdiotsPdf,
    Download: require('../assets/pdfs/Surrounded by Idiots .pdf')
  },
  {
    picture: WildImage,
    title: 'The Call Of The Wild',
    author: 'Jack London',
    genre: 'Adventure Fiction',
    availability: true,
    read:WildPdf,
    Download: require('../assets/pdfs/The-Call-of-the-Wild-by-Jack-London.pdf')
  },
  {
    picture: LovedImage,
    title: 'Love In The Afternoon',
    author: 'Cate Speck',
    genre: "Romance",
    availability: true,
    read:LovePdf,
    Download: require('../assets/pdfs/Love In The Afternoon (Kate Speck [Speck, Kate]) (z-lib.org) (2).pdf')
  },
  {
    picture: TeachImage,
    title: 'I Will Teach You To Be Rich',
    author: 'Ramit Sethi',
    genre: "Self Help",
    availability: true,
    read:TechPdf,
    Download: require('../assets/pdfs/I Will Teach You To Be Rich ( PDFDrive ).pdf')
  },
  {
    picture: AnglesImage,
    title: 'Rage Of Angles',
    author: 'Thibaut Meurisse',
    genre: 'Drama',
    availability: true,
    read:AnglePdf,
    Download: require('../assets/pdfs/Sidney Sheldon - Rage Of Angels(1).pdf')
  },
  {
    picture: ThinkrichImage,
    title: 'Think And Grow Rich',
    author: 'Napoleon Hill',
    genre: "Self help",
    availability: true,
    read:ThinkrichPdf,
    Download: require('../assets/pdfs/Think And Grow Rich ( PDFDrive ).pdf')
  },
  {
    picture: DoomsdayImage,
    title: 'The Doomsday Conspiracy',
    author: 'Sidney Sheldon',
    genre: "Conspiracy",
    availability: true,
    read:DoomsdayPdf,
    Download: require('../assets/pdfs/Doomsday Conspiracy with Bonus Material - Sidney Sheldon.pdf')
  },
  {
    picture: BattlesImage,
    title: 'Win Your Inner Battles',
    author: 'Darius Foroux',
    genre: "Self Help",
    availability: true,
    read:BattlesPdf,
    Download: require('../assets/pdfs/win-your-inner-battles-defeat-the-enemy-within-and.pdf')
  },
  {
    picture: MidnightImage,
    title: 'Memmories Of Midnight',
    author: 'Sidney Sheldon',
    genre: 'Fiction',
    availability: true,
    read:MidnightPdf,
    Download: require('../assets/pdfs/Sidney Sheldon - Memories Of Midnight.pdf')
  },
  {
    picture: Ceochinaimage,
    title: 'CEO China: The Rise of Xi Jinping',
    author: 'I.B Taurus',
    genre: 'Biography',
    availability: true,
    read:CeochinaPdf,
    Download: require('../assets/pdfs/CEO, China The Rise of Xi Jinping by Kerry Brown.pdf')
  },
  {
    picture: EmotionImage,
    title: 'Emotional Intelligence For Dummies',
    author: 'Steven J. Stein',
    genre: "Self Help",
    availability: true,
    raed:EmoPdf,
    Download: require('../assets/pdfs/Emotional_Intelligence_For_Dummies_Steven_J_Stein_z_lib_org.pdf')
  },
  {
    picture: ChemImage,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: "Fantasy/Adventure",
    availability: false,
    raed:AlchemistPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: StraImage,
    title: 'The 33 Strateies Of War',
    author: 'Robert Greene',
    genre: "Self Help",
    availability: true,
    read: WarPdf,
    Download: require('../assets/pdfs/The_33_Strategies_of_War.pdf')
  },
  {
    picture: ZigImae,
    title: 'Ziglar On Selling',
    author: 'Zig Ziglar',
    genre: "Business",
    availability: true,
    raed:ZigPdf,
    Download: require('../assets/pdfs/Ziglar_on_Selling_The_Ultimate_Handbook_for_the_Complete_Sales_Professional.pdf')
  },
  {
    picture: HabitsImage,
    title: 'The Power of Habits',
    author: 'Charles Duhigg',
    genre: "Self Help",
    availability: true,
    read:HabitsPdf,
    Download: require('../assets/pdfs/The_Power_of_Habit_Why_We_Do_What_We_Do_in_Life_and_Business_PDFDrive.pdf')
  },
  {
    picture: SaidImage,
    title: 'The Words I Wish I Said',
    author: 'Caitlin Kellz',
    genre: 'Poetry',
    availability: true,
    read:SaidPdf,
    Download: require('../assets/pdfs/The Words I Wish I Said by caitlin kelly (z-lib.org).pdf')
  },
  {
    picture: EuropeImage,
    title: 'How Europe Underdeeveloped Africa',
    author: 'Walter Rodney',
    genre: "Classics",
    availability: true,
    read:EuropePdf,
    Download: require('../assets/pdfs/How_Europe_Underdeveloped_Africa_Walter_Rodney_1973_PDFDrive_.pdf')
  },
  {
    picture: NoniceImage,
    title: 'No More Mr Nice Guy',
    author: 'Robert A Clover',
    genre: "Self help",
    availability: true,
    read:NonicePdf,
    Download: require('../assets/pdfs/No More Mr. Nice Guy by Robert Glover - 7Chan ( PDFDrive ).pdf')
  },
  {
    picture: TheBuzImage,
    title: 'The Business of the 21st Century',
    author: 'Robert T Kiyosaki',
    genre: "Business",
    availability: true,
    read:TheBuzPdf,
    Download: require('../assets/pdfs/The Business of the 21st Century ( PDFDrive ).pdf')
  },
  {
    picture: DeplomacyImage,
    title: 'Diplomacy',
    author: 'Henry Kissinger ',
    genre: "International Relations",
    availability: true,
    raed:DeplomacyPdf,
    Download: require('../assets/pdfs/Diplomacy (Henry Kissinger).pdf')
  },
  {
    picture: UnlimitedsucImage,
    title: 'Unlimited Sales Success',
    author: 'Brian Tracy',
    genre: "Business",
    availability: true,
    read:UnlimitedsucPdf,
    Download: require('../assets/pdfs/Unlimited_Sales_Success_12_Simple_Steps_for_Selling_More_Than_You.pdf')
  },
  {
    picture: AirImage,
    title: 'When Breath Becomes Air',
    author: 'Paul Kalanithi',
    genre: "Autobiography",
    availability: true,
    read:BreathPdf,
    Download: require('../assets/pdfs/When_Breath_Become.pdf')
  },
  {
    picture: MistakemadeImage,
    title: 'Mistake Made By Marie James',
    author: 'Marie James',
    genre: "Dark Romance ",
    availability: true,
    read:MistakemadePdf,
    Download: require('../assets/pdfs/Mistakes Made by Marie James.pdf')
  },
  {
    picture: JustkeepImage,
    title: 'Just Keep Buying',
    author: 'Nick Maggiulli',
    genre: "Business",
    availability: true,
    read:JustkeepPdf,
    Download: require('../assets/pdfs/Just_Keep_Buying.pdf')
  },
  {
    picture: CheeseImage,
    title: 'Who Moved My Cheese',
    author: 'Dr. Spencer Johnson',
    genre: "Pscyhology",
    availability: true,
    read:CheesePdf,
    Download: require('../assets/pdfs/Who Moved My Cheese_ ( PDFDrive ).pdf')
  },
  {
    picture: FackedupImage,
    title: 'Everything Is Fucked Up',
    author: 'Mark Mansion',
    genre: "Self Help",
    availability: true,
    Download: require('../assets/pdfs/Mark_Manson_Everything_Is_F_cked_A_Book_About_Hope_Harper_PDFDrive.pdf')
  },
  {
    picture: DoveImage,
    title: 'The Wings Of The Dove',
    author:'Henry James',
    genre: 'Fiction',
    availability: true,
    read:DovePdf,
    Download: require('../assets/pdfs/wings_of_a_dove.pdf')
  },
  {
    picture: FrogImage,
    title: 'Eat That Frog',
    author: 'Brian Tracy',
    genre: "Self Help",
    availability: true,
    read:FrogPdf,
    Download: require('../assets/pdfs/Who Moved My Cheese_ ( PDFDrive ).pdf')
  },
  {
    picture: AlpaImage,
    title: 'How To Become An Alfa Male',
    author: 'Charles Sledge',
    genre: "Masculinity",
    availability: true,
    read:MalePdf,
    Download: require('../assets/pdfs/John Alexander - How To Become An Alpha Male.pdf')
  },
  {
    picture: MasteryImage,
    title: 'Mastery',
    author: 'Robert Greene',
    genre: "Self Help",
    availability: true,
    read:MasterPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: SapienImage,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: "Non-Fiction",
    availability: true,
    read:SapienPdf,
    Download: require('../assets/pdfs/Sapiens.pdf')
  },
  {
    picture: BuddhiImage,
    title: 'Why Buddhisim Is True',
    author: 'Robert Write',
    genre: "Phylosopy",
    availability: true,
    read:BudhPdf,
    Download: require('../assets/pdfs/Why_Buddhism_Is_True_The_Science_and_Philosophy_of_Meditation_and.pdf')
  },
  {
    picture: TalkImage,
    title: 'How To Talk To Anyone',
    author: 'Lell Lownders',
    genre: "Self Help",
    availability: true,
    read:AnyonePdf,
    Download: require('../assets/pdfs/How to Talk to Anyone ( PDFDrive.com ).pdf')
  },
  {
    picture: LeanImage,
    title: 'Lean Startup',
    author: 'Eric Ries',
    genre: "Business",
    availability: true,
    read:LeanPdf,
    Download: require('../assets/pdfs/The-Lean-Startup-.pdf')
  },
  {
    picture: StartzImage,
    title: 'Start From Zero',
    author: 'Dane Maxwell',
    genre: "Business",
    availability: true,
    read:StartzPdf,
    Download: require('../assets/pdfs/Start_From_Zero_Build_Your_Own_Business_and_Experience_True_Freedom.pdf')
  },
  {
    picture: DictImage,
    title: 'The Dictionary Of Body Language',
    author: 'Joe Navarro',
    genre: "Classics",
    availability: true,
    read:DictPdf,
    Download: require('../assets/pdfs/The_Dictionary_of_Body_Language_A_Field_Guide_to_Human_Behavior.pdf')
  },
  {
    picture: MillionImage,
    title: 'The Millionaire Mindset',
    author: 'Gerry Robert',
    genre: "Business",
    availability: true,
    read:MillionPdf,
    Download: require('../assets/pdfs/The Millionaire Mindset - Mission Improvement ( PDFDrive ).pdf')
  },
  {
    picture: MirrorImage,
    title: 'Stranger In The Mirror ',
    author: 'Sidney Sheldon',
    genre: "Pschyology",
    availability: true,
    read:MirrorPdf,
    Download: require('../assets/pdfs/Stranger in the Mirror, A - Sidney Sheldon.pdf')
  },
  {
    picture: ArtImage,
    title: 'The Art Of War',
    author: 'Sun Tzu',
    genre: "Self Help",
    availability: true,
    read:ArtPdf,
    Download: require('../assets/pdfs/The_Art_of_War_Complete_Texts_and_Commentaries_Sun_Tzu,_Thomas_Cleary.pdf')
  },
  {
    picture: YourdreamsImage,
    title: 'Tell Me Your Dreams',
    author: 'Sidney Sheldon',
    genre: "Pschyology",
    availability: true,
    read:YourdreamsPdf,
    Download: require('../assets/pdfs/The-Lean-Startup-.pdf')
  },
  {
    picture: BedImage,
    title: 'Make Your Bed',
    author: 'Admiral William McRaven',
    genre: "Self help",
    availability: true,
    read:BedPdf,
    Download: require('../assets/pdfs/Make-your-Bed-PDF.pdf')
  },
  {
    picture: SuperiorImage,
    title: 'The Way Of The Superior Man',
    author: 'David Deida',
    genre: "Masculinity",
    availability: true,
    read:ManPdf,
    Download: require('../assets/pdfs/The Way Of The Superior Man.pdf')
  },
  {
    picture: BloomImage,
    title: 'Bloom\'s Guide',
    author: 'Oedipus Rex',
    genre: "Fiction THirller",
    availability: true,
    read:BloomsPdf,
    Download: require('../assets/pdfs/blooms guide.pdf')
  },
  {
    picture: RatImage,
    title: 'Rational Male',
    author: 'Rollo Tomassi',
    genre: "Masculinity",
    availability: true,
    read:RationalPdf,
    Download: require('../assets/pdfs/The Rational Male by Rollo Tomassi.pdf')
  },
  {
    picture: HomoImage,
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    genre: "Science/Philosophy",
    availability: true,
    read:HomoPdf,
    Download: require('../assets/pdfs/homo_deus_a_brief_history_of_tomorrow_pdf.pdf')
  },
  {
    picture: LessImage,
    title: 'The Road Less Travelled',
    author: 'M. Scott Peck',
    genre: "Self Help",
    availability: true,
    read:RoadPdf,
    Download: require('../assets/pdfs/The_Road_Less_Traveled_A_New_Psychology_of_Love,_Traditional_Values.pdf')
  },
  {
    picture: SemenImage,
    title: 'Semen Retention',
    author: 'Joseph Peterson',
    genre: "Masculinity/Health",
    availability: false,
    read:SemenPdf,
    Download: require('../assets/pdfs/Atomic-Habits-.pdf')
  },
  {
    picture: MoneyImage,
    title: 'The Psychology Of Money',
    author: 'Morhan Housel',
    genre: "Self Help",
    availability: true,
    read:MoneyPdf,
    Download: require('../assets/pdfs/The_Psychology_of_Money_Timeless_lessons_on_wealth,_greed,_and_happiness.pdf')
  },
  {
    picture: BabaImage,
    title: 'The Secrets of the Baba Segi\'s Wives',
    author: 'Lola Shoneyin',
    genre: "Fiction",
    availability: true,
    read:BabaPdf,
    Download: require('../assets/pdfs/The Secret Lives of Baba Segi\'s Wives ( PDFDrive ).pdf')
  },
  {
    picture: JobsImage,
    title: 'Steve Jobs',
    author: 'Isaacson Walter',
    genre: "Self Help",
    availability: true,
    read: JobPdf,
    Download: require('../assets/pdfs/Steve Jobs by Isaacson, Walter.pdf')
  },

  {
    picture: AmImage,
    title: 'The 5 Am Club',
    author: 'Robin Sharma',
    genre: "Self Help",
    availability: true,
    read:AmPdf,
    Download: require('../assets/pdfs/The 5AM Club by Robin Sharma (z-lib.org).pdf')
  },
  {
    picture: NigeriaImage,
    title: 'The Trouble With Nigeria',
    author: 'Chinua Achebe',
    genre: "Political Science",
    availability: true,
    read:NigeriaPdf,
    Download: require('../assets/pdfs/The Trouble with Nigeria (Chinua Achebe).pdf')
  },
  {
    picture: WordsImage,
    title: 'The Power Of Words',
    author: 'Don Gossett',
    genre: "Self Help",
    availability: true,
    read:WordsPdf,
    Download: require('../assets/pdfs/The power of your Words..E W. Kenyon & Don Gossett.pdf')
  },
  {
    picture:ComeImage ,
    title: 'Come As You Are',
    author: 'Emily Nagoski',
    genre: "Self Help",
    read:ComePdf,
    availability: true,
    Download: require('../assets/pdfs/Come-as-You-Are-The-Surprising-New-Science.pdf')
  },
  {
    picture: ArrowImage,
    title: 'Arrow Of God',
    author: 'Chinua Achebe',
    genre: "Tragedy",
    availability: true,
    read:ArrowPdf,
    Download: require('../assets/pdfs/The-Lean-Startup-.pdf')
  },
  {
    picture: RichImage,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    genre: "Self Help",
    read: DadPdf,
    availability: true,
    Download: require('../assets/pdfs/Rich Dad Poor Dad ( PDFDrive ).pdf')
  },
  {
    picture: CantImage,
    title: 'Can\'t Hurt Me',
    author: 'David Goggins',
    genre: "Self Help",
    availability: true,
    read:CantPdf,
    Download: require('../assets/pdfs/The Unplugged Alpha ... by Unknown  Cooper  Ric....pdf')
  },
  {
    picture: ConImage,
    title: 'The Law Of Confession',
    author: 'Bill Winston',
    genre: "Self Help",
    availability: true,
    read:ConfPdf,
    Download: require('../assets/pdfs/The Law of Confession..Bill Wiston.pdf')
  },
  {
    picture: CrimeImage,
    title: 'My Life In Crime',
    author: 'John Kiriamiti',
    genre: "Fiction",
    availability: true,
    read:CrimePdf,
    Download: require('../assets/pdfs/my-life-in-crime---john-kiriamiti-190337.pdf')
  },
  {
    picture: FaithImage,
    title: 'Faith For Finances',
    author: 'Thomas E Zordani',
    genre: "Self Help",
    availability: true,
    read:FaithPdf,
    Download: require('../assets/pdfs/Faith for Finances Kenyon & Don Gossett.pdf')
  },
  
  {
    picture: ManImage,
    title: 'Man Search For Meaning',
    author: 'Victor E Frankl',
    genre: "Self Help",
    availability: true,
    read:SearchPdf,
    Download: require('../assets/pdfs/Man\'s Search For Meaning.pdf')
  },
  {
    picture: WorryImage,
    title: 'How To Stop Worrying And Start Living',
    author: 'Dale Carnegie',
    genre: "Self-Help",
    availability: true,
    read:WorryPdf,
    Download: require('../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf')
  },
  {
    picture: ThornsImage,
    title: 'Court Thorns Roses',
    author: 'Sarah Maas',
    genre: "Romance",
    availability: true,
    read:ThornPdf,
    Download: require('../assets/pdfs/[Dale Carnegie] How To Stop Worrying And Start Living.pdf')
  },
  {
    picture: AfricanImage,
    title: 'African Hidden Stories',
    author: 'Credo Mutwa',
    genre: "Fiction",
    availability: true,
    read:AfriPdf,
    Download: require('../assets/pdfs/africans.pdf')
  },
  {
    picture: LightImage,
    title: 'Warrior Of The Light',
    author: 'Paulo Coelho',
    genre: "Self Help",
    availability: false,
    read:LightPf,
    Download: require('../assets/pdfs/The_Psychology_of_Money_Timeless_lessons_on_wealth,_greed,_and_happiness.pdf')
  },

  {
    picture: WallImage,
    title: 'The Wall Speaks',
    author: 'Jarr Rejj',
    genre: "Masculinity",
    availability: true,
    read:WallPdf,
    Download: require('../assets/pdfs/The wall speaks.pdf')
  },
  {
    picture: SilenceImage,
    title: 'Learn To Silence The Mind',
    author: 'Osho',
    genre: "Self Help",
    availability: true,
    read:LearnPdf,
    Download: require('../assets/pdfs/toaz_info_learning_to_silence_the_mind_wellness_through_meditation.pdf')
  },
  {
    picture: EmotImage,
    title: 'Master Your Emotions',
    author: 'Thibaut Neurisse',
    genre: "Self Help",
    availability: true,
    read:YouPdf,
    Download: require('../assets/pdfs/Master Your Emotions A Practical Guid... (Z-Library).pdf')

  },
  {
    picture: ProfitImage,
    title: 'Profit First',
    author: 'Mike Michalowicz',
    genre: "Business",
    availability: true,
    read:ProfitPdf,
    Download: require('../assets/pdfs/Profit_first_a_simple_system_to_transform_any_business_from_a.pdf')
  },
  {
    picture: SubtleImage,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    genre: "Self help",
    availability: true,
    read:SubbtlePdf,
    Download: require('../assets/pdfs/Mark_Manson_The_Subtle_Art_of_Not_Giving_a_Fuck_Harper_2016.pdf')
  },
  {
    picture: ApartImage,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    genre: "Tragedy",
    availability: true,
    read:ApartPdf,
    Download: require('../assets/pdfs/Things Fall Apart (Achebe, Chinua) (z-lib.org).pdf')
  },

  {
    picture: HapImage,
    title: 'Stubbling On Happiness',
    author: 'Daniel Gilbert',
    genre: "Self Help",
    availability: true,
    read:HapPdf,
    Download: require('../assets/pdfs/Stumbling_on_Happiness_Stumbling_on_Happiness_Stumbling_on_Happiness.pdf')
  },
  {
    picture: AgainImage,
    title: 'Think Again',
    author: 'Walter Sinnott',
    genre: "Self Help",
    availability: true,
    read:AgaPdf,
    Download: require('../assets/pdfs/Think again.pdf')
  },
  {
    picture: UnbornImage,
    title: 'Rules For My Unborn Son',
    author: 'Walker Lamond',
    genre: "Traditional",
    availability: true,
    read:UnbornPdf,
    Download: require('../assets/pdfs/Rules for My Unborn Son   ( PDFDrive ).pdf')
  },
];

function Booklist() {
  const { theme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    if (selectedBook) {
      const savedPage = localStorage.getItem(`bookmark-${selectedBook.title}`);
      if (savedPage) {
        setCurrentPage(parseInt(savedPage, 10));
      }
    }
  }, [selectedBook]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookClick = (book, event) => {
    event.stopPropagation();
    setSelectedBook(book);
  };

  const handlePageChange = (e) => {
    const { currentPage } = e;
    setCurrentPage(currentPage);
    if (selectedBook) {
      localStorage.setItem(`bookmark-${selectedBook.title}`, currentPage);
    }
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      {selectedBook ? (
        <div className="pdf-viewer">
          <button className='back' onClick={() => setSelectedBook(null)}>Back to List</button>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl={selectedBook.read}
              plugins={[defaultLayoutPluginInstance]}
              initialPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Worker>
        </div>
      ) : (
        <div>
          <ol className={`book-list ${theme}`}>
            {filteredBooks.map((book, index) => (
              <li key={index} className={`book-item ${theme}`}>
                <img src={book.picture} alt={book.title} className="book-image" />
                <div className="book-info">
                  <h3 className="book-title"><i>{book.title}</i></h3>
                  <p className="book-author">{book.author}</p>
                  <h4 className='genre'><i>Genre</i></h4>
                  <p className='book-genre'>{book.genre}</p>
                  <p className={`book-availability ${book.availability ? 'available' : 'unavailable'}`}>
                    {book.availability ? 'Available' : 'Unavailable'}
                  </p>
                  <a href={book.Download} target="_blank" rel="noopener noreferrer" className="book-link">Download</a>
                  <button onClick={(event) => handleBookClick(book, event)} className="book-link">Read</button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}

export default Booklist;