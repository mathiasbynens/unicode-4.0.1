module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,152,81,150,237,58,10,67,39,116,63,142,3,8,24,203,91,61,255,105,180,132,234,35,248,84,108,136,181,99,155,80,255,109,255,219,249,183,251,239,253,126,188,30,175,143,87,240,74,94,197,11,188,154,215,240,226,184,199,113,143,227,30,199,61,142,123,28,247,56,238,113,220,227,184,199,113,143,227,62,142,251,56,238,227,184,230,239,225,239,193,191,239,11,94,201,171,120,233,239,230,53,188,246,223,23,63,94,143,215,199,139,227,130,227,130,227,130,227,130,227,130,227,130,227,146,227,146,227,146,227,146,227,146,227,146,227,146,227,146,99,146,99,138,99,138,99,138,99,138,99,138,99,138,99,138,113,138,253,96,31,120,31,188,7,222,3,239,53,239,53,239,53,239,53,239,53,239,113,222,223,240,222,240,222,240,222,240,222,242,222,242,222,242,30,9,126,228,23,100,23,228,22,100,22,228,21,100,21,228,20,228,20,100,20,228,19,100,19,228,18,100,18,100,16,212,31,159,238,113,44,117,7,53,7,245,6,181,6,117,6,53,6,245,5,181,69,242,30,117,5,53,5,245,4,181,4,181,4,181,4,181,4,181,4,181,4,181,4,181,4,181,4,181,4,181,68,243,25,195,231,14,159,75,45,49,124,54,181,4,181,196,242,222,114,30,212,145,124,247,201,249,39,231,158,124,207,201,249,39,231,158,124,175,201,119,154,124,159,201,121,39,231,157,124,111,201,121,39,223,85,242,253,36,223,77,114,190,201,119,146,156,111,242,93,36,231,156,228,158,156,103,130,241,192,62,240,111,176,15,28,207,117,145,205,123,205,123,205,123,100,158,100,158,100,158,156,103,146,121,114,158,201,121,38,153,39,153,39,153,39,231,155,100,94,100,94,156,111,145,119,113,206,197,249,22,215,100,113,61,22,231,92,156,115,113,206,197,53,87,92,111,197,57,23,231,92,100,93,100,93,100,93,100,93,100,93,156,123,145,117,113,238,197,121,23,89,23,89,23,89,23,89,23,53,20,89,23,89,23,89,23,117,20,121,23,181,20,25,22,231,86,203,123,156,95,173,238,113,60,183,86,113,158,224,222,2,231,10,242,5,215,8,184,183,192,121,131,123,11,156,59,184,183,192,249,131,204,65,13,224,154,1,117,128,236,65,45,224,218,1,245,128,235,7,212,4,174,33,80,23,184,142,64,109,224,59,1,245,129,239,5,212,8,174,41,80,39,184,159,64,173,224,59,2,245,130,251,9,212,12,190,47,80,55,248,206,64,237,224,126,2,245,131,239,14,100,0,238,39,144,3,248,14,65,22,224,158,2,121,128,123,10,100,2,238,41,144,11,248,110,65,54,40,142,35,31,20,199,145,17,248,174,65,78,224,251,6,89,129,172,64,86,32,43,112,125,130,239,30,92,163,224,251,7,215,41,184,6,192,181,10,174,3,112,189,130,107,1,92,11,224,186,5,215,3,184,118,193,53,1,174,95,112,93,128,235,23,92,27,224,121,2,174,143,37,175,165,134,165,134,77,253,14,94,201,171,120,129,23,199,80,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,82,195,114,254,219,58,89,121,159,115,94,206,121,57,223,213,92,185,150,151,107,121,185,94,150,107,101,117,2,251,252,213,225,123,39,239,29,187,119,230,222,161,171,83,247,247,238,120,214,16,29,186,63,157,182,63,29,179,191,214,121,221,186,215,58,177,91,190,125,103,182,2,180,2,180,198,141,2,232,16,254,141,60,70,30,35,143,145,199,200,99,238,152,151,199,200,99,229,177,242,88,121,172,60,86,30,43,143,149,199,202,99,47,51,92,106,80,110,144,142,203,34,151,70,46,143,92,34,185,76,114,169,228,114,137,147,137,179,137,60,46,159,92,66,185,140,114,41,229,114,202,37,149,203,42,210,123,57,229,125,26,247,105,200,167,222,79,29,161,142,80,71,168,35,212,17,234,72,117,228,165,42,117,164,58,82,29,165,142,82,7,206,92,22,83,47,212,219,234,21,216,39,166,79,56,159,72,94,38,123,226,247,132,238,205,37,61,117,136,213,19,166,39,66,79,112,222,94,42,84,30,20,141,79,32,62,49,248,36,255,147,242,79,162,63,233,253,164,242,187,196,169,172,169,52,249,148,35,159,18,228,83,118,124,74,139,79,57,241,41,33,62,101,195,167,84,248,148,7,159,146,32,141,58,36,80,249,239,41,249,61,101,190,167,212,247,148,251,158,146,223,83,246,123,74,127,79,249,239,41,1,62,101,191,167,148,247,148,243,158,146,222,83,214,123,74,123,79,121,239,41,241,61,101,62,18,110,153,145,97,175,50,12,205,147,249,100,66,38,101,52,88,43,76,73,135,70,30,138,23,90,97,161,160,202,66,52,242,208,10,139,11,175,21,166,180,68,35,15,145,76,173,176,20,78,229,42,154,144,73,153,146,129,76,203,140,140,60,180,194,148,200,104,228,33,216,202,105,52,245,175,149,205,104,238,23,100,90,102,100,150,134,196,105,158,204,39,19,50,242,8,121,132,60,66,30,33,143,144,71,202,35,229,145,242,72,121,164,60,82,30,41,143,148,71,202,35,229,81,242,40,121,148,60,74,30,37,143,146,71,201,163,228,81,242,40,121,64,30,144,7,228,1,121,64,30,144,7,228,193,23,218,197,53,212,74,125,52,41,83,50,144,185,222,145,97,188,146,74,165,196,214,25,219,58,96,91,167,107,235,104,165,225,16,172,58,86,29,171,142,85,7,223,71,55,95,5,77,200,148,76,203,168,227,169,227,169,67,156,251,169,227,169,227,83,135,102,213,154,80,107,46,173,105,180,102,208,66,220,162,219,2,219,98,218,194,217,34,217,130,216,226,215,66,215,162,214,2,214,98,213,194,212,34,212,130,211,226,210,66,210,162,193,249,210,180,58,90,29,173,142,86,71,171,67,202,91,202,91,202,91,202,91,202,91,202,91,202,91,202,91,202,91,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,202,71,47,96,36,127,180,204,70,12,70,203,108,4,98,36,127,36,127,242,254,148,155,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,143,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,228,175,246,209,234,117,175,246,209,234,157,43,155,183,210,121,43,159,183,18,122,43,99,183,82,118,43,103,183,146,118,43,107,183,210,118,43,31,183,18,114,43,35,183,82,114,43,39,183,146,114,43,43,211,200,99,244,107,238,151,124,37,117,71,190,210,187,43,95,138,158,31,79,154,81,78,166,249,100,66,38,101,138,134,153,137,166,101,70,102,105,62,121,124,242,248,228,241,201,35,244,43,238,151,124,67,190,33,223,144,111,200,55,228,155,250,149,250,85,138,82,138,82,242,45,249,150,124,75,190,37,223,146,111,201,163,228,1,121,64,30,208,56,104,28,52,14,26,7,141,131,198,181,198,181,198,141,126,205,253,210,51,70,207,24,249,142,124,71,190,35,223,213,175,189,95,138,194,23,63,202,241,163,28,63,202,241,163,28,63,202,221,163,220,61,202,221,163,220,61,202,221,163,180,61,74,219,195,244,66,19,242,13,249,138,203,19,18,37,235,121,169,95,121,191,52,142,107,156,155,71,131,5,226,73,224,195,253,146,27,244,32,73,85,198,166,145,135,164,190,214,211,90,79,147,192,39,109,202,211,163,154,140,251,139,29,58,69,71,199,230,232,216,28,157,147,163,138,98,74,178,84,75,140,10,9,110,173,145,209,47,189,85,21,17,252,56,214,103,110,42,139,202,206,89,125,60,127,250,220,77,229,84,89,125,66,171,128,148,189,241,125,227,251,198,235,99,182,84,206,201,226,108,159,157,179,215,123,31,217,113,159,217,225,15,237,251,212,142,251,216,142,251,220,142,251,224,142,251,228,142,251,232,86,25,72,139,243,197,249,226,124,113,190,56,95,156,47,206,23,231,139,243,197,249,234,99,28,87,170,224,138,21,92,185,130,43,88,112,37,11,174,104,193,149,45,184,194,5,87,186,224,138,23,92,249,130,43,96,112,37,12,174,136,193,149,49,184,66,6,87,202,224,138,25,92,57,131,43,104,112,37,13,174,168,193,149,53,184,194,6,87,218,224,138,27,92,121,131,43,112,112,37,14,174,200,193,149,57,184,66,7,87,234,224,138,29,92,185,131,43,120,112,37,15,174,232,193,149,61,192,125,27,174,14,218,107,202,13,220,180,155,113,227,145,249,115,243,220,124,110,194,141,163,164,163,164,163,164,163,164,163,164,163,148,163,148,163,148,163,148,163,148,163,148,163,148,163,148,163,148,163,148,163,140,251,198,125,227,62,127,132,206,250,9,254,26,157,245,19,214,161,253,97,58,107,119,127,161,206,218,253,62,225,121,2,254,220,60,55,159,155,112,147,110,202,13,220,248,59,247,62,234,119,127,142,242,28,229,57,138,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,174,65,170,204,187,198,81,224,40,112,20,131,92,131,92,131,220,253,235,115,232,191,111,124,19,92,127,236,43,117,92,243,220,124,110,194,77,185,129,155,118,51,110,236,254,236,254,236,254,236,254,236,174,47,87,53,142,146,238,75,247,165,251,242,175,207,79,72,63,33,253,132,244,19,202,79,40,63,161,28,165,28,165,28,165,28,165,28,165,28,165,28,165,28,5,142,2,71,129,163,192,81,224,40,112,20,56,10,28,101,221,183,238,91,247,237,95,159,159,240,87,53,25,228,51,200,103,144,207,32,175,174,84,83,110,224,166,221,140,27,71,49,207,103,158,207,60,159,121,62,243,124,230,121,245,166,26,71,121,142,226,127,102,62,243,124,230,249,204,243,153,231,51,207,103,158,207,60,159,121,62,243,124,230,249,204,243,153,231,51,207,103,158,207,60,159,121,62,243,124,230,249,204,243,153,231,51,207,103,158,15,142,2,71,105,71,105,71,49,207,191,42,244,51,207,191,114,244,51,207,191,186,244,51,207,191,2,245,51,207,191,74,245,51,79,151,172,252,194,113,20,243,252,204,211,69,44,27,71,49,207,207,60,63,243,116,117,203,198,81,62,71,249,28,229,115,148,207,81,204,211,229,235,239,51,79,215,177,191,207,60,93,208,254,62,243,116,101,251,251,204,211,37,238,239,51,79,215,186,191,207,60,93,244,178,113,20,243,252,204,211,101,48,27,71,49,207,207,60,63,243,252,218,81,218,81,218,81,250,162,132,121,134,121,134,121,198,239,175,15,110,218,205,184,185,39,132,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,198,231,40,159,163,124,142,242,57,138,121,134,121,134,121,70,253,245,249,9,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,230,25,127,60,219,81,218,81,218,81,250,162,164,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,230,231,40,159,163,132,163,132,163,152,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,254,241,28,71,25,71,25,71,25,255,199,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,202,204,42,28,37,28,37,28,37,28,37,28,37,28,37,28,37,237,158,118,119,138,44,167,200,114,138,44,167,200,50,172,50,172,50,172,234,191,62,135,54,172,50,172,50,172,50,172,50,172,50,172,250,131,53,142,50,142,50,142,50,142,50,142,50,142,178,142,178,142,178,142,178,142,226,20,89,78,145,229,20,89,62,203,203,103,57,124,150,195,103,57,124,246,192,103,15,76,16,38,8,19,68,252,245,165,155,114,3,55,237,102,220,248,9,6,9,131,132,65,194,32,97,144,48,72,56,55,194,185,17,206,141,112,110,132,207,114,248,44,135,207,114,248,44,135,207,30,248,208,129,15,29,120,147,192,155,4,222,36,240,38,129,9,194,4,97,130,48,65,152,32,76,16,38,8,19,132,9,194,31,25,48,72,24,100,27,100,27,100,27,100,27,100,251,16,239,191,255,218,250,208,105,31,58,237,67,167,125,232,180,15,157,246,161,211,62,116,218,59,167,189,115,218,59,167,189,115,218,59,167,189,115,218,4,219,4,219,4,219,4,219,4,219,4,219,4,219,4,219,4,219,167,119,27,100,27,100,27,100,27,100,27,100,27,100,251,180,105,159,54,237,211,166,125,218,180,79,155,246,105,211,62,109,218,167,77,251,180,105,239,156,246,206,105,239,156,246,206,105,239,156,238,254,223,255,1,93,235,200,33,94,30,0,0])))