import add_icon_green from "./add_icon_green.png";
import add_icon_white from "./add_icon_white.png";
import app_store from "./app_store.png";
import bag_icon from "./bag_icon.png";
import basket_icon from "./basket_icon.png";
import cross_icon from "./cross_icon.png";
import facebook_icon from "./facebook_icon.png";
import header from "./header.jpg";
import linkedin_icon from "./linkedin_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";
import play_store from "./play_store.png"; // Fixed typo
import profile_icon from "./profile_icon.png";
import rating_stars from "./rating_stars.png"; // Fixed typo
import remove_icon_red from "./remove_icon_red.png";
import search_icon from "./search_icon.png";
import selector_icon from "./selector_icon.png";
import twitter_icon from "./twitter_icon.png";
import amaranth from "./amaranth.jpg";
import apple from "./apple.jpg";
import avocado from "./avocado.jpeg";
import barley from "./barley.jpg";
import beetroot from "./beetroot.jpg";
import black_beans from "./black_beans.jpg";
import brocoli from "./brocoli.jpg";
import cabbages from "./cabbages.jpg";
import carrots from "./carrots.jpg";
import cash_crops from "./cash_crops.jpg";
import coffee from "./coffee.jpg";
import cotton from "./cotton.jpg";
import dragon_fruit from "./dragon_fruit.jpg"; // Fixed missing variable
import fruits from "./fruits.jpg";
import ginger from "./ginger.jpg";
import grains from "./grains.jpg";
import grapes from "./grapes.jpg";
import green_grams from "./green_grams.jpg";
import ground_nuts from "./ground_nuts.jpg";
import irish_potato from "./irish_potato.jpg";
import kidney_beans from "./kidney_beans.jpg";
import kiwi from "./kiwi.jpg";
import legumes from "./legumes.jpg";
import lentils from "./lentils.jpg"; // Fixed spelling (lentiles → lentils)
import logo from "./logo.png";
import mango from "./mango.jpg";
import melon from "./melon.jpg";
import millet from "./millet.jpeg";
import nectarine from "./nectarine.jpg";
import oats from "./oats.jpg";
import oranges from "./oranges.jpg";
import passion from "./passion.jpg";
import peas from "./peas.jpg";
import pineapple from "./pineapple.jpg";
import plum from "./plum.jpg";
import pyrethrum from "./pyrethrum.jpg";
import quinoa from "./quinoa.jpg";
import red_beans from "./red_beans.jpg";
import red_pepper from "./red_pepper.jpeg";
import rice from "./rice.jpg";
import shea_nut from "./shea_nut.jpg";
import sorghum from "./sorghum.jpg";
import soy_bean from "./soy_bean.jpg";
import spinach from "./spinach.jpg";
import split_pea from "./split_pea.jpg";
import straw_berry from "./straw_berry.jpeg"; // Removed duplicate
import sugarcane from "./sugarcane.jpg";
import tea_leaves from "./tea_leaves.jpg";
import tomato from "./tomato.jpg";
import vegetables from "./vegetables.jpg";
import wheat from "./wheat.jpg";
import wheat1_copy from "./wheat1_copy.jpg";
import white_peas from "./white_peas.jpg";
import yellow_beans from "./yellow_beans.jpg";

export const assets = {
    add_icon_green,
    add_icon_white,
    app_store,
    bag_icon,
    basket_icon,
    cross_icon,
    facebook_icon,
    header,
    linkedin_icon,
    logout_icon,
    parcel_icon,
    play_store, // Fixed typo
    profile_icon,
    rating_stars, // Fixed typo
    remove_icon_red,
    search_icon,
    selector_icon,
    twitter_icon,
    amaranth,
    apple,
    avocado,
    barley,
    beetroot,
    black_beans,
    brocoli,
    cabbages,
    carrots,
    cash_crops,
    coffee,
    cotton,
    dragon_fruit, // Fixed missing variable
    fruits,
    ginger,
    grains,
    grapes,
    green_grams,
    ground_nuts,
    irish_potato,
    kidney_beans,
    kiwi,
    legumes,
    lentils, // Fixed spelling
    logo,
    mango,
    melon,
    millet,
    nectarine,
    oats,
    oranges,
    passion,
    peas,
    pineapple,
    plum,
    pyrethrum,
    quinoa,
    red_beans,
    red_pepper,
    rice,
    shea_nut,
    sorghum,
    soy_bean,
    spinach,
    split_pea,
    straw_berry,
    sugarcane,
    tea_leaves,
    tomato,
    vegetables,
    wheat,
    wheat1_copy,
    white_peas,
    yellow_beans
};
export const plant_list = [
    {
        plant_name: "Cash Crops",
        plant_image: cash_crops
    },
    {
        plant_name: "Fruits",
        plant_image: fruits
    },
    {
plant_name:"Legumes",
plant_image: legumes
    },
    {
        plant_name:"Grains",
        plant_image:grains
            },
            {
                plant_name:"Vegetables",
                plant_image: vegetables
                    },
];
export const crop_list = [
    {
        _id:"1",
        name:"coffee",
        image:coffee,
        price:12,
        category:"Cash Crops"
    },
    {
        _id:"2",
        name:"cotton",
        image:cotton,
        price:18,
        category:"Cash Crops"
    },
    {
        _id:"3",
        name:"pyrethrum",
        image:pyrethrum,
        price:20,
        category:"Cash Crops"
    },
    {
        _id:"4",
        name:"sugarcane",
        image:sugarcane,
        price:24,
        category:"Cash Crops"
    },
    {
        _id:"5",
        name:"tea_leaves",
        image:tea_leaves,
        price:30,
        category:"Cash Crops"
    },
    {
        _id:"6",
        name:"apple",
        image:apple,
        price:45,
        category:"Fruits"
    },
    {
        _id:"7",
        name:"dragon-fruit",
        image:dragon_fruit,
        price:50,
        category:"Fruits"
    },
    {
        _id:"8",
        name:"grapes",
        image:grapes,
        price:55,
        category:"Fruits"
    },
    {
        _id:"9",
        name:"mango",
        image:mango,
        price:77,
        category:"Fruits"
    },
    {
        _id:"10",
        name:"oranges",
        image:oranges,
        price:80,
        category:"Fruits"
    },
    {
        _id:"11",
        name:"passion",
        image:passion,
        price:87,
        category:"Fruits"
    },
    {
        _id:"12",
        name:"pineapple",
        image:pineapple,
        price:90,
        category:"Fruits"
    },
    {
        _id:"13",
        name:"black_beans",
        image:black_beans,
        price:77,
        category:"Legumes"
    },
    {
        _id:"14",
        name:"green_grams",
        image:green_grams,
        price:77,
        category:"Legumes"
    },
    {
        _id:"15",
        name:"ground_nuts",
        image:ground_nuts,
        price:77,
        category:"Legumes"
    },
    {
        _id:"16",
        name:"kidney_beans",
        image:kidney_beans,
        price:77,
        category:"Legumes"
    },
    {
        _id:"17",
        name:"lentils",
        image:lentils,
        price:77,
        category:"Legumes"
    },
    {
        _id:"18",
        name:"red_beans",
        image:red_beans,
        price:87,
        category:"Legumes"
    },

    {
        _id:"19",
        name:"soy_bean",
        image:soy_bean,
        price:97,
        category:"Legumes"
    },
    {
        _id:"20",
        name:"split_pea",
        image:split_pea,
        price:97,
        category:"Legumes"
    },
    {
        _id:"21",
        name:"barley",
        image:barley,
        price:117,
        category:"Grains"
    },
    {
        _id:"22",
        name:"millet",
        image:millet,
        price:67,
        category:"Grains"
    },
    {
        _id:"23",
        name:"quinoa",
        image:quinoa,
        price:97,
        category:"Grains"
    },
    {
        _id:"24",
        name:"quinoa",
        image:quinoa,
        price:97,
        category:"Grains"
    },
    {
        _id:"25",
        name:"quinoa",
        image:quinoa,
        price:97,
        category:"Grains"
    },
    {
        _id:"26",
        name:"rice",
        image:rice,
        price:57,
        category:"Grains"
    },

{
        _id:"27",
        name:"sorghum",
        image:sorghum,
        price:77,
        category:"Grains"
    },
    {
        _id:"28",
        name:"wheat1_copy",
        image:wheat1_copy,
        price:97,
        category:"Grains"
    },
    {
        _id:"29",
        name:"avocado",
        image:avocado,
        price:99,
        category:"Vegetables"
    },
    {
        _id:"30",
        name:"brocoli",
        image:brocoli,
        price:69,
        category:"Vegetables"
    },
    {
        _id:"31",
        name:"cabbages",
        image:cabbages,
        price:69,
        category:"Vegetables"
    },
    {
        _id:"32",
        name:"cabbages",
        image:cabbages,
        price:69,
        category:"Vegetables"
    },
    {
        _id:"33",
        name:"cabbages",
        image:cabbages,
        price:69,
        category:"Vegetables"
    },
    {
        _id:"34",
        name:"carrots",
        image:carrots,
        price:49,
        category:"Vegetables"
    },
    {
        _id:"35",
        name:"irish_potato",
        image:irish_potato,
        price:69,
        category:"Vegetables"
    },
    {
        _id:"36",
        name:"spinach",
        image:spinach,
        price:83,
        category:"Vegetables"
    },
    {
        _id:"37",
        name:"tomato",
        image:tomato,
        price:69,
        category:"Vegetables"
    },

]