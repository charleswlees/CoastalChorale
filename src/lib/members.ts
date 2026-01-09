//Headshots

export interface Bio {
  name: string,//Ex. Forrest Tripp
  part: string,//Ex. Bass
  //hometown: string,//Ex. Saco
  //yearjoined: string//Ex. 2023
}

export interface Member {
  bio: Bio
  photo: string
  bioText?: string
}

let members: Member[] = [];
let directors: Member[] = [];

const bioFiles = import.meta.glob<string>("/src/assets/bios/*.md", {
  as: "raw",
  eager: true,
});

const getBioText = (slug: string) =>
  bioFiles[`/src/assets/bios/${slug}.md`] as string | undefined;

const createMember = (bio: Bio, photo: string, slug: string): Member => ({
  bio,
  photo,
  bioText: getBioText(slug),
});

////////////////////
/////Directors/////
////////////////////

import ForrestImage from '../assets/headshots_2025/MGK_4094.jpg'
const forrestBio: Bio = {
  name: "Forrest Tripp",
  part: "Bass",
}
const forrestMember = createMember(forrestBio, ForrestImage, "forrest-tripp")
directors.push(forrestMember);

import GwenImage from '../assets/headshots_2025/MGK_4083.jpg'
const gwenBio: Bio = {
  name: "Gwendelyn Cooper",
  part: "Alto"
}
const gwenMember = createMember(gwenBio, GwenImage, "gwendelyn-ruby-hill")
directors.push(gwenMember);

////////////////////
//////Members///////
////////////////////

import placeholderImage from '../assets/placeholder.png'

//Aaron Lockman
import aaronImage from '../assets/headshots_2025/MGK_4077.jpg'
const aaronBio: Bio = {
  name: "Aaron Lockman",
  part: "Tenor"
}
const aaronMember = createMember(aaronBio, aaronImage, "aaron-lockman")
members.push(aaronMember);

//Abby Crowley
import abbyImage from '../assets/headshots_2025/MGK_4106.jpg'
const abbyBio: Bio = {
  name: "Abby Crowley",
  part: "Alto"
}
const abbyMember = createMember(abbyBio, abbyImage, "abby-crowley")
members.push(abbyMember);

//Andrew Beaucage
import andrewImage from '../assets/headshots_2025/MGK_4092.jpg'
const andrewBio: Bio = {
  name: "Andrew Beaucage",
  part: "Tenor"
}
const andrewMember = createMember(andrewBio, andrewImage, "andrew-beaucage")
members.push(andrewMember)

//Angela Rideout
import angelaImage from '../assets/headshots_2025/MGK_4101.jpg'
const angelaBio: Bio = {
  name: "Angela Rideout",
  part: "Alto"
}
const angelaMember = createMember(angelaBio, angelaImage, "angela-rideout")
members.push(angelaMember)

//Anna Roberts
import annaImage from '../assets/headshots_2025/MGK_4126.jpg'
const annaBio: Bio = {
  name: "Anna Roberts",
  part: "Alto"
}
const annaMember = createMember(annaBio, annaImage, "anna-roberts")
members.push(annaMember)

//Bonnie Snyder
import bonnieImage from '../assets/headshots_2025/MGK_4098.jpg'
const bonnieBio: Bio = {
  name: "Bonnie Snyder",
  part: "Soprano"
}
const bonnieMember = createMember(bonnieBio, bonnieImage, "bonnie-snyder")
members.push(bonnieMember);

//Camille Pierce
import camilleImage from '../assets/headshots_2025/MGK_4074.jpg'
const camilleBio: Bio = {
  name: "Camille Pierce",
  part: "Alto"
}
const camilleMember = createMember(camilleBio, camilleImage, "camille-pierce")
members.push(camilleMember)

//Catherine Aguiar-DiOrio
import catherineImage from '../assets/headshots_winter2025/catherine-aguiardirio.jpg'
const catherineBio: Bio = {
  name: "Catherine Aguiar-DiOrio",
  part: "Soprano"
}
const catherineMember = createMember(catherineBio, catherineImage, "catherine-aguiar-diorio")
members.push(catherineMember)

//Charlie Lees
import charlieImage from '../assets/headshots_2025/MGK_4111.jpg'
const charlieBio: Bio = {
  name: "Charlie Lees",
  part: "Tenor"
}
const charlieMember = createMember(charlieBio, charlieImage, "charlie-lees")
members.push(charlieMember)

/*
//Dylan Lindsey
import dylanImage from '../assets/headshots_2025/MGK_4104.jpg'
const dylanBio: Bio ={
  name: "Dylan Lindsey",
  part: "Bass"
}
const dylanMember = createMember(dylanBio, dylanImage, "dylan-lindsey")
members.push(dylanMember)
*/

//Emily Cprot
import emilyImage from '../assets/headshots_winter2025/emily-cprot.jpg'
const emilyBio: Bio ={
  name: "Emily Cprot",
  part: "Alto"
}
const emilyMember = createMember(emilyBio, emilyImage, "emily-cprot")
members.push(emilyMember)


//Henry Doering
import henryImage from '../assets/headshots_2025/MGK_4080.jpg'
const henryBio: Bio ={
  name: "Henry Doering",
  part: "Bass"
}
const henryMember = createMember(henryBio, henryImage, "henry-doering")
members.push(henryMember);

//Izzy Simbari
import izzyImage from '../assets/headshots_2025/MGK_4139.jpg'
const izzyBio: Bio ={
  name: "Isabelle \"Izzy\" Simbari",
  part: "Soprano"
}
const izzyMember = createMember(izzyBio, izzyImage, "isabelle-izzy-simbari")
members.push(izzyMember);

//Jennifer Shevlin-Fernandes
import jennImage from '../assets/headshots_winter2025/jenn.jpg'
const jenniferBio: Bio ={
  name: "Jennifer Shevlin-Fernandes",
  part: "Soprano"
}
const jenniferMember = createMember(jenniferBio, jennImage, "jennifer-shevlin-fernandes")
members.push(jenniferMember)

//John Probert
import johnImage from '../assets/headshots_winter2025/john-probert.jpg'
const johnBio: Bio ={
  name: "John K. Probert",
  part: "Tenor"
}
const johnMember = createMember(johnBio, johnImage, "john-k-probert")
members.push(johnMember)

//Jonna Casoli-Bucklin
import jonnaImage from '../assets/headshots_2025/MGK_4086.jpg'
const jonnaBio: Bio ={
  name: "Jonna Casoli-Bucklin",
  part: "Alto"
}
const jonnaMember = createMember(jonnaBio, jonnaImage, "jonna-casoli-bucklin")
members.push(jonnaMember)

//Julianna Burke
import juliannaImage from '../assets/headshots_2025/MGK_4225.jpg'
const juliannaBio: Bio ={
  name: "Julianna Burke",
  part: "Soprano"
}
const juliannaMember = createMember(juliannaBio, juliannaImage, "julianna-burke")
members.push(juliannaMember);

//Julien Leavitt
import julienImage from '../assets/headshots_winter2025/julien-leavitt.jpg'
const julienBio: Bio ={
  name: "Julien Leavitt",
  part: "Tenor"
}
const julienMember = createMember(julienBio, julienImage, "julien-leavitt")
members.push(julienMember)

//Justin Lamoureaux
import justinImage from '../assets/headshots_2025/MGK_4076.jpg'
const justinBio: Bio ={
  name: "Justin Lamoureaux",
  part: "Bass"
}
const justinMember = createMember(justinBio, justinImage, "justin-lamoureaux")
members.push(justinMember)

//Kate Nickerson
import kateImage from '../assets/headshots_2025/MGK_4115.jpg'
const kateBio: Bio ={
  name: "Kate Nickerson",
  part: "Alto"
}
const kateMember = createMember(kateBio, kateImage, "kate-nickerson")
members.push(kateMember)

//Lauren Dickson
import laurenImage from '../assets/headshots_2025/MGK_4121.jpg'
const laurenBio: Bio ={
  name: "Lauren Dickson",
  part: "Soprano"
}
const laurenMember = createMember(laurenBio, laurenImage, "lauren-dickson")
members.push(laurenMember)

//Lisa Tripp
import lisaImage from '../assets/headshots_winter2025/lisa-tripp.jpg'
const lisaBio: Bio ={
  name: "Lisa Tripp",
  part: "Soprano"
}
const lisaMember = createMember(lisaBio, lisaImage, "lisa-tripp")
members.push(lisaMember)

//Lydia Schneider
import lydiaImage from '../assets/headshots_2025/MGK_4135.jpg'
const lydiaBio: Bio ={
  name: "Lydia Schneider",
  part: "Soprano"
}
const lydiaMember = createMember(lydiaBio, lydiaImage, "lydia-schneider")
members.push(lydiaMember)

//Michael Milazzo
import michaelImage from '../assets/headshots_winter2025/michael-milazzo.jpg'
const michaelBio: Bio ={
  name: "Michael Milazzo",
  part: "Tenor"
}
const michaelMember = createMember(michaelBio, michaelImage, "michael-milazzo")
members.push(michaelMember)

//Michala Valley Michaud
import michalaImage from '../assets/headshots_winter2025/michala-michaud.jpg'
const michalaBio: Bio ={
  name: "Michala Valley Michaud",
  part: "Soprano"
}
const michalaMember = createMember(michalaBio, michalaImage, "michala-valley-michaud")
members.push(michalaMember)

//Mike Knowles
import mikeImage from '../assets/headshots_2025/MGK_4143.jpg'
const mikeBio: Bio ={
  name: "Mike Knowles",
  part: "Bass"
}
const mikeMember = createMember(mikeBio, mikeImage, "mike-knowles")
members.push(mikeMember)

//Morgan Houlihan
import morganImage from '../assets/headshots_2025/MGK_4132.jpg'
const morganBio: Bio ={
  name: "Morgan Houlihan",
  part: "Alto"
}
const morganMember = createMember(morganBio, morganImage, "morgan-houlihan")
members.push(morganMember)

//Natalia Kimball
import nataliaImage from '../assets/headshots_2025/MGK_4088.jpg'
const nataliaBio: Bio ={
  name: "Natalia Kimball",
  part: "Soprano"
}
const nataliaMember = createMember(nataliaBio, nataliaImage, "natalia-kimball")
members.push(nataliaMember)

/*
//Pip Kolmar
import pipImage from '../assets/headshots_2025/MGK_4109.jpg'
const pipBio: Bio ={
  name: "Pip Kolmar",
  part: "Tenor"
}
const pipMember = createMember(pipBio, pipImage, "pip-kolmar")
members.push(pipMember)
*/

//Ryan Conway
import ryanImage from '../assets/headshots_2025/MGK_4110.jpg'
const ryanBio: Bio ={
  name: "Ryan Thomas Conway",
  part: "Bass"
}
const ryanMember = createMember(ryanBio, ryanImage, "ryan-thomas-conaway")
members.push(ryanMember)

//Ryan Murray
import ryanMImage from '../assets/headshots_winter2025/ryan-murray.jpg'
const ryanMurrayBio: Bio ={
  name: "Ryan Murray",
  part: "Bass"
}
const ryanMurrayMember = createMember(ryanMurrayBio, ryanMImage, "ryan-murray")
members.push(ryanMurrayMember)

/*
//Sarah Macy
import sarahImage from '../assets/headshots_2025/MGK_4123.jpg'
const sarahBio: Bio ={
  name: "Sarah Macy",
  part: "Soprano"
}
const sarahMember = createMember(sarahBio, sarahImage, "sarah-macy")
members.push(sarahMember);
*/

/*
//Sara Todd
const saraToddBio: Bio ={
  name: "Sara Todd",
  part: "TBD"
}
const saraToddMember = createMember(saraToddBio, placeholderImage, "sara-todd")
members.push(saraToddMember)
*/

//Simon Roussel
import simonImage from '../assets/headshots_2025/MGK_4222.jpg'
const simonBio: Bio ={
  name: "Simon Roussel",
  part: "Tenor"
}
const simonMember = createMember(simonBio, simonImage, "simon-roussel")
members.push(simonMember);

//SooZin Cha
import soozinImage from '../assets/headshots_2025/MGK_4119.jpg'
const soozinBio: Bio ={
  name: "SooZin Kim Cha",
  part: "Alto"
}
const soozinMember = createMember(soozinBio, soozinImage, "soozin-kim-cha")
members.push(soozinMember)

/*
//Taylor Everett
import taylorImage from '../assets/headshots_2025/MGK_4223.jpg'
const taylorBio : Bio ={
  name: "Taylor Everett",
  part: "Tenor"
}
const taylorMember  = createMember(taylorBio, taylorImage, "taylor-everett")
members.push(taylorMember)
*/


//Tess LeClair
import tessImage from '../assets/headshots_winter2025/tess-leclair.jpg'
const tessBio : Bio ={
  name: "Tess LeClair",
  part: "Alto"
}
const tessMember  = createMember(tessBio, tessImage, "tess-leclair")
members.push(tessMember)


//Tessa Solomon
import tessaImage from '../assets/headshots_winter2025/tessa-solomon.jpg'
const tessaBio : Bio ={
  name: "Tessa Solomon",
  part: "Alto"
}
const tessaMember  = createMember(tessaBio, tessaImage, "tessa-solomon")
members.push(tessaMember)

//Wyatt Cannell
import wyattImage from '../assets/headshots_2025/MGK_4089.jpg'
const wyattBio : Bio ={
  name: "Wyatt Cannell",
  part: "Bass"
}
const wyattMember  = createMember(wyattBio, wyattImage, "wyatt-cannell")
members.push(wyattMember)

export {directors, members}
