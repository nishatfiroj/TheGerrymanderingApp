import React, { Component } from "react";
import ImageMapper from "react-image-mapper";
import URL from "../../Assets/Maps/compact.png";

export default class CompactAlgoMap extends Component {
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
    // const URL = "../Assets/maps/compact_algo.png";
    const MAP = {
      name: "my-map",
      areas: [
        {
          name: 1,
          shape: "poly",
          coords: [
            1,
            4,
            275,
            7,
            250,
            34,
            254,
            51,
            278,
            69,
            258,
            77,
            241,
            77,
            224,
            73,
            220,
            81,
            215,
            71,
            194,
            72,
            178,
            82,
            179,
            94,
            145,
            96,
            148,
            111,
            130,
            118,
            135,
            107,
            121,
            112,
            112,
            104,
            104,
            101,
            104,
            82,
            54,
            82,
            58,
            57,
            7,
            55,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            277,
            66,
            269,
            74,
            243,
            76,
            228,
            72,
            220,
            80,
            214,
            72,
            195,
            70,
            178,
            81,
            182,
            104,
            191,
            104,
            189,
            110,
            200,
            116,
            191,
            136,
            197,
            147,
            178,
            168,
            202,
            185,
            209,
            191,
            209,
            208,
            194,
            213,
            189,
            226,
            195,
            235,
            194,
            254,
            236,
            247,
            251,
            250,
            258,
            245,
            257,
            237,
            269,
            235,
            271,
            228,
            265,
            217,
            274,
            192,
            282,
            195,
            287,
            193,
            293,
            186,
            286,
            181,
            293,
            174,
            288,
            167,
            300,
            153,
            311,
            146,
            321,
            141,
            335,
            144,
            333,
            136,
            326,
            125,
            318,
            119,
            315,
            104,
            312,
            98,
            307,
            89,
            302,
            73,
            285,
            76,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            8,
            58,
            27,
            212,
            58,
            214,
            63,
            209,
            78,
            202,
            80,
            195,
            107,
            172,
            105,
            163,
            94,
            164,
            95,
            146,
            93,
            130,
            109,
            127,
            105,
            117,
            114,
            109,
            104,
            99,
            104,
            80,
            53,
            79,
            55,
            58,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            68,
            376,
            54,
            384,
            55,
            398,
            43,
            424,
            49,
            459,
            44,
            483,
            42,
            518,
            64,
            574,
            353,
            598,
            345,
            554,
            319,
            514,
            328,
            503,
            328,
            481,
            334,
            480,
            329,
            455,
            303,
            453,
            305,
            438,
            269,
            433,
            219,
            429,
            218,
            435,
            178,
            425,
            181,
            418,
            153,
            419,
            145,
            407,
            133,
            407,
            138,
            395,
            123,
            395,
            122,
            386,
            113,
            388,
            100,
            374,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            328,
            483,
            342,
            482,
            347,
            490,
            361,
            486,
            372,
            473,
            386,
            484,
            385,
            442,
            391,
            433,
            402,
            433,
            414,
            421,
            412,
            414,
            433,
            398,
            425,
            389,
            432,
            388,
            432,
            375,
            441,
            375,
            438,
            367,
            448,
            360,
            440,
            353,
            444,
            345,
            468,
            329,
            484,
            340,
            492,
            348,
            494,
            362,
            500,
            371,
            497,
            379,
            506,
            396,
            524,
            396,
            531,
            411,
            506,
            446,
            474,
            541,
            465,
            584,
            408,
            573,
            396,
            627,
            376,
            630,
            374,
            601,
            353,
            597,
            349,
            565,
            343,
            566,
            346,
            550,
            333,
            540,
            323,
            512,
            329,
            508,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            30,
            215,
            48,
            323,
            61,
            340,
            59,
            362,
            69,
            368,
            70,
            374,
            98,
            375,
            112,
            390,
            123,
            389,
            129,
            356,
            124,
            337,
            121,
            331,
            127,
            328,
            140,
            307,
            149,
            313,
            161,
            284,
            170,
            285,
            170,
            249,
            160,
            247,
            165,
            236,
            156,
            228,
            131,
            225,
            125,
            211,
            112,
            208,
            105,
            201,
            84,
            202,
            67,
            213,
          ],
        },
        {
          name: 5,
          shape: "poly",
          coords: [
            259,
            247,
            273,
            253,
            272,
            261,
            280,
            261,
            279,
            271,
            278,
            281,
            283,
            295,
            289,
            299,
            292,
            313,
            304,
            310,
            308,
            319,
            324,
            325,
            321,
            340,
            325,
            343,
            319,
            349,
            317,
            360,
            313,
            366,
            327,
            367,
            331,
            407,
            336,
            412,
            331,
            425,
            339,
            433,
            335,
            449,
            305,
            450,
            304,
            437,
            283,
            439,
            266,
            430,
            216,
            430,
            214,
            434,
            190,
            431,
            180,
            429,
            182,
            417,
            155,
            418,
            147,
            405,
            135,
            408,
            139,
            394,
            126,
            392,
            130,
            356,
            125,
            333,
            139,
            313,
            153,
            315,
            162,
            289,
            173,
            286,
            172,
            248,
            192,
            246,
            196,
            258,
            238,
            249,
            254,
            254,
          ],
        },
        {
          name: 5,
          shape: "poly",
          coords: [
            337,
            149,
            351,
            161,
            363,
            166,
            372,
            175,
            376,
            183,
            379,
            194,
            386,
            200,
            394,
            200,
            401,
            205,
            407,
            214,
            404,
            225,
            414,
            236,
            420,
            245,
            429,
            251,
            427,
            256,
            439,
            263,
            454,
            270,
            457,
            282,
            460,
            290,
            466,
            304,
            469,
            316,
            469,
            324,
            467,
            330,
            442,
            349,
            440,
            357,
            445,
            363,
            434,
            369,
            437,
            373,
            429,
            378,
            428,
            383,
            424,
            393,
            430,
            400,
            409,
            415,
            410,
            421,
            400,
            431,
            387,
            433,
            384,
            441,
            384,
            480,
            369,
            473,
            359,
            488,
            346,
            491,
            343,
            483,
            334,
            484,
            328,
            458,
            338,
            454,
            340,
            433,
            333,
            426,
            337,
            413,
            332,
            405,
            328,
            368,
            317,
            363,
            320,
            349,
            328,
            343,
            324,
            337,
            325,
            323,
            309,
            318,
            305,
            308,
            294,
            309,
            292,
            297,
            285,
            293,
            280,
            282,
            282,
            262,
            274,
            258,
            275,
            252,
            256,
            243,
            273,
            230,
            266,
            217,
            274,
            197,
            288,
            193,
            291,
            182,
            291,
            167,
            311,
            147,
            325,
            141,
          ],
        },
        {
          name: 1,
          shape: "poly",
          coords: [
            127,
            113,
            118,
            115,
            112,
            111,
            105,
            114,
            109,
            125,
            122,
            127,
            130,
            135,
            141,
            134,
            144,
            139,
            152,
            139,
            157,
            133,
            165,
            134,
            169,
            128,
            175,
            134,
            181,
            130,
            188,
            138,
            198,
            117,
            186,
            115,
            191,
            106,
            180,
            108,
            180,
            94,
            149,
            93,
            146,
            116,
          ],
        },
        {
          name: 2,
          shape: "poly",
          coords: [
            147,
            140,
            145,
            146,
            173,
            171,
            196,
            146,
            186,
            131,
            176,
            133,
            170,
            128,
            168,
            133,
            158,
            133,
            154,
            139,
          ],
        },
        {
          name: 2,
          shape: "poly",
          coords: [
            95,
            127,
            127,
            127,
            133,
            140,
            124,
            149,
            122,
            159,
            109,
            169,
            104,
            161,
            96,
            160,
          ],
        },
        {
          name: 4,
          shape: "poly",
          coords: [136, 140, 136, 182, 162, 187, 170, 170, 144, 143],
        },
        {
          name: 4,
          shape: "poly",
          coords: [
            181,
            170,
            207,
            188,
            210,
            206,
            193,
            219,
            193,
            246,
            164,
            247,
            167,
            232,
            158,
            226,
            135,
            225,
            124,
            206,
            115,
            208,
            109,
            204,
            125,
            195,
            123,
            184,
            157,
            185,
            162,
            190,
            171,
            172,
          ],
        },
        {
          name: 3,
          shape: "poly",
          coords: [
            86,
            201,
            82,
            195,
            99,
            179,
            111,
            169,
            122,
            160,
            127,
            148,
            134,
            141,
            133,
            134,
            142,
            133,
            145,
            140,
            138,
            140,
            133,
            182,
            122,
            182,
            125,
            194,
            110,
            202,
            104,
            201,
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
