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
}

let members: Member[] = [];
let directors: Member[] = [];

////////////////////
/////Directors/////
////////////////////

import ForrestImage from '../assets/headshots_2025/MGK_4094.jpg'
const forrestBio: Bio = {
  name: "Forrest Tripp",
  part: "Bass",
}
const forrestMember: Member = {
  bio: forrestBio,
  photo: ForrestImage
}
directors.push(forrestMember);

import GwenImage from '../assets/headshots_2025/MGK_4083.jpg'
const gwenBio: Bio = {
  name: "Gwen Hill",
  part: "Alto"
}
const gwenMember: Member = {
  bio: gwenBio,
  photo: GwenImage
}
directors.push(gwenMember);

////////////////////
//////Members///////
////////////////////

//Aaron Lockman
import aaronImage from '../assets/headshots_2025/MGK_4077.jpg'
const aaronBio: Bio = {
  name: "Aaron Lockman",
  part: "Tenor"
}
const aaronMember: Member = {
  bio: aaronBio,
  photo: aaronImage
}
members.push(aaronMember);

//Abby Crowley
import abbyImage from '../assets/headshots_2025/MGK_4106.jpg'
const abbyBio: Bio = {
  name: "Abby Crowley",
  part: "Alto"
}
const abbyMember: Member = {
  bio: abbyBio,
  photo: abbyImage
}
members.push(abbyMember);

//Andrew Beaucage
import andrewImage from '../assets/headshots_2025/MGK_4092.jpg'
const andrewBio: Bio = {
  name: "Andrew Beaucage",
  part: "Tenor"
}
const andrewMember: Member = {
  bio: andrewBio,
  photo: andrewImage
}
members.push(andrewMember)

//Angela Rideout
import angelaImage from '../assets/headshots_2025/MGK_4101.jpg'
const angelaBio: Bio = {
  name: "Angela Rideout",
  part: "Alto"
}
const angelaMember: Member = {
  bio: angelaBio,
  photo: angelaImage
}
members.push(angelaMember)

//Anna Roberts
import annaImage from '../assets/headshots_2025/MGK_4126.jpg'
const annaBio: Bio = {
  name: "Anna Roberts",
  part: "Alto"
}
const annaMember: Member = {
  bio: annaBio,
  photo: annaImage
}
members.push(annaMember)

//Bonnie Snyder
import bonnieImage from '../assets/headshots_2025/MGK_4098.jpg'
const bonnieBio: Bio = {
  name: "Bonnie Snyder",
  part: "Soprano"
}
const bonnieMember: Member = {
  bio: bonnieBio,
  photo: bonnieImage
}
members.push(bonnieMember);

//Camille Pierce
import camilleImage from '../assets/headshots_2025/MGK_4074.jpg'
const camilleBio: Bio = {
  name: "Camille Pierce",
  part: "Alto"
}
const camilleMember: Member = {
  bio: camilleBio,
  photo: camilleImage
}
members.push(camilleMember)

//Charlie Lees
import charlieImage from '../assets/headshots_2025/MGK_4111.jpg'
const charlieBio: Bio = {
  name: "Charlie Lees",
  part: "Tenor"
}
const charlieMember: Member = {
  bio: charlieBio,
  photo: charlieImage
}
members.push(charlieMember)

//Dylan Lindsey
import dylanImage from '../assets/headshots_2025/MGK_4104.jpg'
const dylanBio: Bio ={
  name: "Dylan Lindsey",
  part: "Bass"
}
const dylanMember: Member ={
  bio: dylanBio,
  photo: dylanImage
}
members.push(dylanMember)

//Henry Doering
import henryImage from '../assets/headshots_2025/MGK_4080.jpg'
const henryBio: Bio ={
  name: "Henry Doering",
  part: "Bass"
}
const henryMember: Member ={
  bio: henryBio,
  photo: henryImage
}
members.push(henryMember);

//Izzy Simbari
import izzyImage from '../assets/headshots_2025/MGK_4139.jpg'
const izzyBio: Bio ={
  name: "Izzy Simbari",
  part: "Soprano"
}
const izzyMember: Member ={
  bio: izzyBio,
  photo: izzyImage
}
members.push(izzyMember);

//John Probert
import johnImage from '../assets/headshots_2025/MGK_4129.jpg'
const johnBio: Bio ={
  name: "John Probert",
  part: "Tenor"
}
const johnMember: Member ={
  bio: johnBio,
  photo: johnImage
}
members.push(johnMember)

//Jonna Casoli-Bucklin
import jonnaImage from '../assets/headshots_2025/MGK_4086.jpg'
const jonnaBio: Bio ={
  name: "Jonna Casoli-Bucklin",
  part: "Alto"
}
const jonnaMember: Member ={
  bio: jonnaBio,
  photo: jonnaImage
}
members.push(jonnaMember)

//Julianna Burke
import juliannaImage from '../assets/headshots_2025/MGK_4225.jpg'
const juliannaBio: Bio ={
  name: "Julianna Burke",
  part: "Soprano"
}
const juliannaMember: Member ={
  bio: juliannaBio,
  photo: juliannaImage
}
members.push(juliannaMember);

//Justin Lamoureaux
import justinImage from '../assets/headshots_2025/MGK_4076.jpg'
const justinBio: Bio ={
  name: "Justin Lamoureaux",
  part: "Bass"
}
const justinMember: Member ={
  bio: justinBio,
  photo: justinImage
}
members.push(justinMember)

//Kate McElwain
import kateImage from '../assets/headshots_2025/MGK_4115.jpg'
const kateBio: Bio ={
  name: "Kate McElwain",
  part: "Alto"
}
const kateMember: Member ={
  bio: kateBio,
  photo: kateImage
}
members.push(kateMember)

//Lauren Dickson
import laurenImage from '../assets/headshots_2025/MGK_4121.jpg'
const laurenBio: Bio ={
  name: "Lauren Dickson",
  part: "Soprano"
}
const laurenMember: Member ={
  bio: laurenBio,
  photo: laurenImage
}
members.push(laurenMember)

//Lydia Schneider
import lydiaImage from '../assets/headshots_2025/MGK_4135.jpg'
const lydiaBio: Bio ={
  name: "Lydia Schneider",
  part: "Soprano"
}
const lydiaMember: Member ={
  bio: lydiaBio,
  photo: lydiaImage
}
members.push(lydiaMember)

//Mike Knowles
import mikeImage from '../assets/headshots_2025/MGK_4143.jpg'
const mikeBio: Bio ={
  name: "Mike Knowles",
  part: "Bass"
}
const mikeMember: Member ={
  bio: mikeBio,
  photo: mikeImage
}
members.push(mikeMember)

//Morgan Houlihan
import morganImage from '../assets/headshots_2025/MGK_4132.jpg'
const morganBio: Bio ={
  name: "Morgan Houlihan",
  part: "Alto"
}
const morganMember: Member ={
  bio: morganBio,
  photo: morganImage
}
members.push(morganMember)

//Natalia Kimball
import nataliaImage from '../assets/headshots_2025/MGK_4088.jpg'
const nataliaBio: Bio ={
  name: "Natalia Kimball",
  part: "Soprano"
}
const nataliaMember: Member ={
  bio: nataliaBio,
  photo: nataliaImage
}
members.push(nataliaMember)

//Pip Kolmar
import pipImage from '../assets/headshots_2025/MGK_4109.jpg'
const pipBio: Bio ={
  name: "Pip Kolmar",
  part: "Tenor"
}
const pipMember: Member ={
  bio: pipBio,
  photo: pipImage
}
members.push(pipMember)

//Ryan Conway
import ryanImage from '../assets/headshots_2025/MGK_4110.jpg'
const ryanBio: Bio ={
  name: "Ryan Conaway",
  part: "Bass"
}
const ryanMember: Member ={
  bio: ryanBio,
  photo: ryanImage
}
members.push(ryanMember)

//Simon Roussel
import simonImage from '../assets/headshots_2025/MGK_4222.jpg'
const simonBio: Bio ={
  name: "Simon Roussel",
  part: "Tenor"
}
const simonMember: Member ={
  bio: simonBio,
  photo: simonImage
}
members.push(simonMember);

//SooZin Cha
import soozinImage from '../assets/headshots_2025/MGK_4119.jpg'
const soozinBio: Bio ={
  name: "SooZin Cha",
  part: "Alto"
}
const soozinMember: Member ={
  bio: soozinBio,
  photo: soozinImage
}
members.push(soozinMember)

//Taylor Everett
import taylorImage from '../assets/headshots_2025/MGK_4223.jpg'
const taylorBio : Bio ={
  name: "Taylor Everett",
  part: "Tenor"
}
const taylorMember : Member ={
  bio: taylorBio,
  photo: taylorImage
}
members.push(taylorMember)

//Wyatt Cannell
import wyattImage from '../assets/headshots_2025/MGK_4089.jpg'
const wyattBio : Bio ={
  name: "Wyatt Cannell",
  part: "Bass"
}
const wyattMember : Member ={
  bio: wyattBio,
  photo: wyattImage
}
members.push(wyattMember)

export {directors, members}





