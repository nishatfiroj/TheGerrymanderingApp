import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import URL from "../../Assets/Maps/maj_min.png";
import "../mapstyle.css";

export default class MajMinMap extends Component {
  clicked(name) {
    switch (name) {
      case 1:
        alert(
          "This district is a heavily Republican district. If you live here and if districts were drawn like this, then your district will most likely vote red."
        );
        break;
      case 2:
        alert(
          "This district is highly competitive. If you live here and if districts were drawn like this, then there is no sure guarantee your district will vote red or blue."
        );
        break;
      case 3:
        alert(
          "This district leans in favor of Democrats. If you live here and if districts were drawn like this, then your district is more likely to vote blue."
        );
        break;
      case 4:
        alert(
          "This district is a heavily Democratic district. If you live here and if districts were drawn like this, then your district will most likely vote blue."
        );
        break;
      case 5:
        alert(
          "This district leans in favor of Republicans. If you live here and if districts were drawn like this, then your district is more likely to vote red."
        );
        break;
      default:
        alert("Error.");
        break;
    }
  }

  render() {
    const MAP = {
      name: "my-map",
      areas: [
        {
          name: 1,
          shape: "poly",
          coords: [
            37,
            254,
            3,
            3,
            38,
            3,
            39,
            20,
            47,
            21,
            46,
            31,
            52,
            31,
            49,
            40,
            61,
            40,
            54,
            79,
            104,
            83,
            102,
            124,
            92,
            125,
            94,
            139,
            83,
            140,
            77,
            166,
            75,
            192,
            82,
            193,
            81,
            202,
            103,
            201,
            106,
            218,
            115,
            225,
            117,
            236,
            117,
            242,
            70,
            238,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            39,
            2,
            275,
            6,
            267,
            19,
            261,
            23,
            254,
            33,
            249,
            40,
            251,
            46,
            238,
            72,
            230,
            73,
            220,
            82,
            228,
            88,
            220,
            102,
            193,
            122,
            171,
            114,
            191,
            93,
            150,
            94,
            149,
            86,
            115,
            87,
            116,
            82,
            56,
            77,
            64,
            38,
            51,
            37,
            54,
            30,
            47,
            29,
            47,
            20,
            40,
            17,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            251,
            48,
            288,
            77,
            300,
            73,
            305,
            85,
            309,
            93,
            312,
            101,
            316,
            111,
            317,
            121,
            325,
            126,
            329,
            134,
            332,
            141,
            336,
            147,
            342,
            150,
            352,
            159,
            360,
            161,
            364,
            167,
            369,
            174,
            376,
            182,
            380,
            193,
            389,
            197,
            397,
            201,
            367,
            228,
            355,
            206,
            352,
            187,
            341,
            189,
            328,
            192,
            319,
            190,
            308,
            190,
            300,
            189,
            293,
            176,
            286,
            180,
            288,
            189,
            286,
            195,
            289,
            207,
            269,
            227,
            261,
            222,
            255,
            211,
            227,
            215,
            210,
            203,
            209,
            190,
            202,
            183,
            179,
            170,
            200,
            147,
            193,
            134,
            197,
            122,
            221,
            103,
            230,
            92,
            224,
            81,
            231,
            73,
            240,
            74,
          ],
        },
        {
          name: 4,
          shape: "poly",
          coords: [
            398,
            202,
            413,
            215,
            400,
            227,
            414,
            237,
            422,
            244,
            429,
            252,
            442,
            262,
            455,
            269,
            460,
            276,
            461,
            289,
            466,
            303,
            468,
            320,
            464,
            334,
            448,
            338,
            433,
            338,
            421,
            320,
            399,
            329,
            391,
            320,
            384,
            303,
            375,
            300,
            365,
            294,
            357,
            296,
            354,
            300,
            355,
            306,
            348,
            306,
            340,
            298,
            315,
            305,
            312,
            303,
            293,
            307,
            277,
            274,
            272,
            278,
            247,
            281,
            240,
            250,
            194,
            254,
            198,
            235,
            191,
            222,
            178,
            204,
            170,
            204,
            160,
            190,
            158,
            179,
            160,
            166,
            169,
            171,
            179,
            168,
            207,
            190,
            209,
            206,
            228,
            215,
            256,
            211,
            264,
            223,
            291,
            207,
            287,
            196,
            289,
            182,
            301,
            190,
            328,
            193,
            350,
            189,
            350,
            199,
            367,
            232,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            46,
            305,
            51,
            327,
            63,
            342,
            81,
            332,
            92,
            335,
            94,
            297,
            116,
            285,
            150,
            316,
            158,
            291,
            200,
            292,
            218,
            289,
            219,
            294,
            215,
            303,
            207,
            306,
            196,
            319,
            188,
            326,
            197,
            333,
            193,
            346,
            189,
            353,
            188,
            369,
            214,
            369,
            227,
            352,
            245,
            372,
            256,
            362,
            268,
            348,
            280,
            344,
            279,
            335,
            286,
            327,
            297,
            326,
            290,
            309,
            275,
            279,
            247,
            284,
            236,
            249,
            193,
            254,
            196,
            236,
            179,
            209,
            167,
            206,
            159,
            211,
            169,
            230,
            159,
            232,
            132,
            225,
            127,
            236,
            115,
            242,
            69,
            238,
            35,
            253,
            40,
            288,
          ],
        },
        {
          name: 3,
          shape: "poly",
          coords: [
            255,
            592,
            65,
            575,
            59,
            561,
            59,
            551,
            52,
            533,
            43,
            516,
            41,
            505,
            45,
            492,
            49,
            478,
            51,
            463,
            47,
            451,
            40,
            437,
            46,
            411,
            51,
            403,
            52,
            380,
            60,
            376,
            70,
            366,
            55,
            354,
            59,
            343,
            78,
            335,
            92,
            336,
            94,
            298,
            114,
            286,
            150,
            320,
            161,
            293,
            213,
            289,
            211,
            302,
            188,
            318,
            193,
            332,
            185,
            369,
            166,
            382,
            177,
            414,
            167,
            443,
            168,
            533,
            209,
            537,
            219,
            532,
            231,
            539,
            229,
            554,
            244,
            561,
            259,
            552,
            263,
            561,
            252,
            576,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            96,
            126,
            97,
            137,
            105,
            137,
            108,
            129,
            115,
            129,
            117,
            134,
            121,
            133,
            123,
            136,
            129,
            138,
            138,
            131,
            139,
            124,
            146,
            126,
            151,
            123,
            165,
            129,
            175,
            121,
            171,
            115,
            188,
            93,
            151,
            93,
            149,
            87,
            115,
            86,
            114,
            83,
            106,
            81,
            104,
            124,
          ],
        },
        {
          name: 5,
          shape: "poly",
          coords: [
            471,
            328,
            481,
            335,
            488,
            343,
            493,
            351,
            495,
            370,
            497,
            387,
            500,
            397,
            510,
            401,
            522,
            399,
            532,
            408,
            510,
            432,
            495,
            466,
            483,
            493,
            484,
            509,
            469,
            526,
            466,
            541,
            468,
            557,
            462,
            581,
            409,
            568,
            397,
            579,
            400,
            604,
            397,
            625,
            381,
            628,
            373,
            602,
            352,
            598,
            350,
            569,
            342,
            570,
            346,
            553,
            331,
            542,
            320,
            508,
            327,
            509,
            329,
            484,
            341,
            479,
            345,
            488,
            363,
            489,
            373,
            474,
            385,
            483,
            384,
            440,
            392,
            430,
            403,
            440,
            414,
            421,
            412,
            415,
            431,
            399,
            423,
            389,
            438,
            373,
            446,
            360,
            440,
            354,
            448,
            340,
          ],
        },
        {
          name: 2,
          shape: "poly",
          coords: [
            104,
            143,
            110,
            144,
            111,
            145,
            108,
            150,
            113,
            153,
            112,
            161,
            119,
            163,
            125,
            159,
            133,
            164,
            136,
            171,
            144,
            166,
            146,
            157,
            140,
            160,
            140,
            152,
            140,
            148,
            146,
            142,
            139,
            133,
            127,
            140,
            122,
            135,
            115,
            134,
            114,
            130,
            108,
            130,
            109,
            138,
          ],
        },
        {
          name: 4,
          shape: "poly",
          coords: [
            81,
            201,
            90,
            189,
            93,
            178,
            110,
            182,
            122,
            187,
            140,
            189,
            154,
            189,
            162,
            200,
            168,
            207,
            160,
            214,
            169,
            232,
            160,
            233,
            132,
            225,
            128,
            236,
            120,
            237,
            118,
            225,
            108,
            220,
            106,
            203,
          ],
        },
        {
          name: 4,
          shape: "poly",
          coords: [
            85,
            146,
            78,
            170,
            75,
            192,
            84,
            192,
            90,
            184,
            94,
            174,
            121,
            186,
            135,
            184,
            135,
            175,
            132,
            168,
            125,
            162,
            120,
            165,
            111,
            163,
            112,
            155,
            107,
            151,
            109,
            145,
            101,
            138,
          ],
        },
        {
          name: 4,
          shape: "poly",
          coords: [
            139,
            185,
            156,
            185,
            158,
            166,
            166,
            162,
            173,
            168,
            188,
            158,
            183,
            154,
            187,
            147,
            182,
            138,
            176,
            141,
            171,
            142,
            160,
            146,
            163,
            152,
            156,
            152,
            149,
            158,
            146,
            166,
            139,
            173,
          ],
        },
        {
          name: 2,
          shape: "poly",
          coords: [
            141,
            131,
            149,
            142,
            142,
            148,
            142,
            155,
            148,
            155,
            161,
            150,
            160,
            145,
            183,
            137,
            189,
            146,
            183,
            154,
            189,
            155,
            198,
            147,
            191,
            137,
            194,
            123,
            190,
            126,
            178,
            119,
            169,
            126,
            168,
            133,
            152,
            124,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            351,
            595,
            261,
            591,
            255,
            575,
            267,
            564,
            265,
            550,
            249,
            560,
            236,
            555,
            234,
            537,
            221,
            535,
            214,
            537,
            170,
            532,
            172,
            439,
            184,
            416,
            168,
            380,
            189,
            368,
            216,
            368,
            229,
            353,
            251,
            367,
            275,
            342,
            289,
            342,
            283,
            335,
            292,
            329,
            304,
            329,
            296,
            306,
            311,
            305,
            322,
            308,
            341,
            299,
            358,
            309,
            362,
            301,
            383,
            299,
            395,
            326,
            420,
            318,
            434,
            335,
            445,
            340,
            437,
            357,
            445,
            359,
            428,
            392,
            436,
            400,
            412,
            416,
            409,
            434,
            394,
            426,
            384,
            440,
            385,
            482,
            375,
            467,
            354,
            485,
            340,
            480,
            328,
            479,
            329,
            511,
            322,
            507,
            329,
            538,
            348,
            548,
            343,
            569,
          ],
        },
      ],
    };

    return (
      <ImageMapper
        src={URL}
        map={MAP}
        onClick={(area) => this.clicked(area.name)}
      />
    );
  }
}
