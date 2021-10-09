// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Kiambu_county.js":[function(require,module,exports) {
var kiambu = {
  type: "FeatureCollection",
  name: "Kiambu_county",
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  features: [{
    type: "Feature",
    properties: {
      OBJECTID: 22.0,
      ID_: 4921.0,
      COUNTY_NAM: "KIAMBU",
      CONST_CODE: 112.0,
      CONSTITUEN: "GATUNDU NORTH",
      COUNTY_COD: 22.0,
      Shape_Leng: 3.0089218262199999,
      Shape_Area: 0.20655368085
    },
    geometry: {
      type: "Polygon",
      coordinates: [[[36.686770107483191, -0.764234238679253], [36.690495980483199, -0.768140394679224], [36.693913949483196, -0.770764906679235], [36.696111214483203, -0.77424391067922], [36.699101937483185, -0.777539808679253], [36.702703011483202, -0.782178480679252], [36.706914437483185, -0.784741957679219], [36.709905160483167, -0.788037855679252], [36.712102425483174, -0.791761000679233], [36.715093148483156, -0.795362074679249], [36.717534554483159, -0.798841078679234], [36.719487679483159, -0.802259047679231], [36.720891488483169, -0.805371839679256], [36.725713265483186, -0.809278089679256], [36.727727425483174, -0.811475355679252], [36.731694711483151, -0.812146742679263], [36.735539925483174, -0.81434400767927], [36.73914100048318, -0.817273695679264], [36.741887582483166, -0.818982679679268], [36.74414588248316, -0.82197340267925], [36.745732796483189, -0.824658949679249], [36.747685921483189, -0.828870375679233], [36.751897347483172, -0.833081800679227], [36.755742562483185, -0.832959730679252], [36.759099496483195, -0.833570082679219], [36.76453162548318, -0.83314283667926], [36.768743050483174, -0.83314283667926], [36.771916879483165, -0.833448011679254], [36.774907601483157, -0.834851820679264], [36.778935921483189, -0.837232191679223], [36.782720101483157, -0.841260511679254], [36.785527718483188, -0.841748793679246], [36.787724984483184, -0.843762953679234], [36.790898812483185, -0.845655043679246], [36.79492713248316, -0.84736402767925], [36.798345101483157, -0.850232679679268], [36.802495492483153, -0.852246839679256], [36.80469275748316, -0.854444105679252], [36.806340707483166, -0.857068617679263], [36.810491097483172, -0.858472425679227], [36.814519418483194, -0.860547621679248], [36.817693246483195, -0.862866957679219], [36.821904671483189, -0.864636976679267], [36.825688851483157, -0.86707838267927], [36.82813025748316, -0.870435316679223], [36.8342948084832, -0.874646742679263], [36.837102425483174, -0.875257093679241], [36.839543832483166, -0.877637464679256], [36.843694222483172, -0.878552992679263], [36.848088754483165, -0.881360609679237], [36.852544320483155, -0.883252699679249], [36.856511605483199, -0.883252699679249], [36.859929574483196, -0.884046156679235], [36.862309945483155, -0.88783033667926], [36.865300668483194, -0.890576918679246], [36.86914588248316, -0.891065199679249], [36.87250281648317, -0.891980726679267], [36.875493539483152, -0.893079359679237], [36.878545296483189, -0.893262464679256], [36.880925668483194, -0.89637525767927], [36.884343636483202, -0.897840101679267], [36.887700570483155, -0.896863539679262], [36.889897836483151, -0.89954908667926], [36.889897836483151, -0.903882582679219], [36.892339242483153, -0.908338148679266], [36.895085824483196, -0.911878187679238], [36.89929725048318, -0.912183363679221], [36.904119027483198, -0.913281996679248], [36.908330453483181, -0.915052015679239], [36.908940804483159, -0.918164808679253], [36.911931527483198, -0.922132093679241], [36.914311898483156, -0.927075941679223], [36.918340218483188, -0.930982191679223], [36.922307504483165, -0.933362562679238], [36.9241385584832, -0.936170179679268], [36.928288949483196, -0.936231214679256], [36.933293832483166, -0.941175062679238], [36.939092171483189, -0.94416578567922], [36.943303597483172, -0.946546156679235], [36.945500863483169, -0.950574476679267], [36.948918832483166, -0.952161390679239], [36.957097543483194, -0.958448011679254], [36.960088265483186, -0.965283949679249], [36.962529671483189, -0.967847425679227], [36.964116586483151, -0.971448500679233], [36.966496957483166, -0.974439222679225], [36.973332894483171, -0.976758558679253], [36.97852088248316, -0.977552015679239], [36.982488168483194, -0.979932386679254], [36.984502328483181, -0.983045179679268], [36.98773719148317, -0.98518141067922], [36.991521371483195, -0.989575941679223], [36.995488656483182, -0.992261488679221], [37.001103890483186, -0.996472914679262], [37.00531531648317, -0.999036390679239], [37.012944711483151, -1.005445082679219], [37.015325082483166, -1.007031996679248], [37.017522347483172, -1.009534437679238], [37.02094031648317, -1.01057203567922], [37.023931039483152, -1.012769300679227], [37.025517953483181, -1.016675550679227], [37.028142464483203, -1.018567640679239], [37.031133187483185, -1.024365980679252], [37.031743539483152, -1.02723463267927], [37.033696664483152, -1.029370863679221], [37.038091195483155, -1.031262953679234], [37.041142953483181, -1.032178480679252], [37.048345101483157, -1.033765394679224], [37.051518929483159, -1.034131605679252], [37.05469275748316, -1.032178480679252], [37.057744515483186, -1.029676039679262], [37.061345589483203, -1.02815016067922], [37.063115609483184, -1.023145277679251], [37.061101449483196, -1.016248304679268], [37.062688363483169, -1.013257582679219], [37.064885629483165, -1.016248304679268], [37.068913949483196, -1.018872816679223], [37.068730843483188, -1.022656996679248], [37.069097054483159, -1.026074964679256], [37.072087777483198, -1.026380140679239], [37.075322640483186, -1.027967054679268], [37.078740609483184, -1.030652601679267], [37.081914437483185, -1.030835707679219], [37.088689339483203, -1.033826429679268], [37.093694222483172, -1.033643324679249], [37.098699105483199, -1.036878187679238], [37.103337777483198, -1.034864027679251], [37.108098519483171, -1.036573011679254], [37.111516488483169, -1.039380629679274], [37.11609412548318, -1.041272718679241], [37.118291390483186, -1.043469984679237], [37.121709359483184, -1.050855238679221], [37.124944222483172, -1.053357679679268], [37.127324593483188, -1.051282484679237], [37.13031531648317, -1.050366957679219], [37.133916390483186, -1.048841078679234], [37.136296761483202, -1.050366957679219], [37.139714730483199, -1.050733168679247], [37.144109261483202, -1.04963453567922], [37.148137582483166, -1.05067213267927], [37.151494515483186, -1.052747328679234], [37.154912484483184, -1.053235609679237], [37.156926644483171, -1.050244886679254], [37.160893929483159, -1.04993971167926], [37.165105355483199, -1.048841078679234], [37.170293343483188, -1.045545179679268], [37.173528207483166, -1.044568617679263], [37.175908578483181, -1.042249281679235], [37.176518929483159, -1.037366468679241], [37.178105843483188, -1.034558851679267], [37.184331429483159, -1.038343031679235], [37.189336312483185, -1.040357191679223], [37.192327035483167, -1.04285963267927], [37.19531775748316, -1.041761000679233], [37.198308480483199, -1.040967543679247], [37.202336800483174, -1.037671644679224], [37.205693734483184, -1.035474379679274], [37.210088265483186, -1.034436781679235], [37.214543832483166, -1.034253675679227], [37.216924203483181, -1.030042250679233], [37.219487679483159, -1.027967054679268], [37.222295296483189, -1.026929457679219], [37.225286019483171, -1.027173597679225], [37.227117074483196, -1.024182875679233], [37.231938851483157, -1.018872816679223], [37.237493050483174, -1.022962172679231], [37.240300668483194, -1.024671156679235], [37.244695199483196, -1.025464613679221], [37.249333871483195, -1.023145277679251], [37.254338754483165, -1.020948011679254], [37.257329476483157, -1.019849379679274], [37.265691293483194, -1.018872816679223], [37.268498910483167, -1.022351820679264], [37.270696175483174, -1.025464613679221], [37.273931039483152, -1.027539808679253], [37.277532113483169, -1.031446058679253], [37.279729379483165, -1.034375746679248], [37.281133187483185, -1.037671644679224], [37.284307015483186, -1.039441664679262], [37.285710824483196, -1.042554457679219], [37.288945687483185, -1.044873793679247], [37.290532601483157, -1.047376234679237], [37.292729867483153, -1.049573500679233], [37.295537484483184, -1.051343519679224], [37.302312386483202, -1.05744703567922], [37.306523812483185, -1.061536390679239], [37.309331429483159, -1.064954359679237], [37.311711800483174, -1.067456800679227], [37.314702523483156, -1.065747816679223], [37.317693246483195, -1.067334730679252], [37.322698129483165, -1.074048597679225], [37.323918832483166, -1.077039320679264], [37.326726449483196, -1.078870375679233], [37.330510629483165, -1.078565199679249], [37.332524789483152, -1.080640394679224], [37.335515511483202, -1.082166273679266], [37.339726937483185, -1.081067640679239], [37.345342171483189, -1.087476332679219], [37.348088754483165, -1.091260511679254], [37.352910531483182, -1.093152601679267], [37.358342660483167, -1.092542250679233], [37.362493050483174, -1.095166761679254], [37.359319222483172, -1.100537855679252], [37.346501839483203, -1.115430433679253], [37.343144906483182, -1.118665297679231], [37.341313851483157, -1.116162855679252], [37.339726937483185, -1.113538343679241], [37.334111703483181, -1.107740004679274], [37.331731332483166, -1.10627516067922], [37.32953406648317, -1.103955824679249], [37.327519906483182, -1.100965101679267], [37.32312537548318, -1.097241957679219], [37.320134652483198, -1.095838148679266], [37.318303597483172, -1.093457777679251], [37.316289437483185, -1.091382582679219], [37.313725961483151, -1.08778150767927], [37.309331429483159, -1.083753187679238], [37.305913461483151, -1.081677992679263], [37.303533089483203, -1.078565199679249], [37.299321664483152, -1.074353773679266], [37.296514046483189, -1.07307203567922], [37.2913260584832, -1.072339613679221], [37.287724984483184, -1.071240980679252], [37.284123910483167, -1.069043714679256], [37.27930213248316, -1.067578871679248], [37.274541390483186, -1.068555433679253], [37.271306527483198, -1.068982679679268], [37.268132699483196, -1.068982679679268], [37.26453162548318, -1.069531996679248], [37.261113656483182, -1.071057875679233], [37.258733285483167, -1.072766859679237], [37.255742562483185, -1.07533033667926], [37.252324593483188, -1.077954847679225], [37.249944222483172, -1.079541761679254], [37.245122445483155, -1.079480726679267], [37.24109412548318, -1.078565199679249], [37.234136117483153, -1.07606275767927], [37.22852088248316, -1.076428968679241], [37.224309457483166, -1.07893141067922], [37.212712777483198, -1.080152113679221], [37.206120980483199, -1.085462172679231], [37.203496468483188, -1.088758070679264], [37.200139535483167, -1.091382582679219], [37.195928109483184, -1.093152601679267], [37.192937386483202, -1.095044691679223], [37.19031287548318, -1.099073011679254], [37.18890906648317, -1.105664808679253], [37.186528695483155, -1.107678968679241], [37.183110726483157, -1.108960707679219], [37.17969275748316, -1.111463148679266], [37.176335824483196, -1.115979750679233], [37.175115121483195, -1.119763929679268], [37.178105843483188, -1.123365004679274], [37.17969275748316, -1.12806471167926], [37.181890023483156, -1.130384047679231], [37.184514535483167, -1.13465650767927], [37.187322152483198, -1.138745863679221], [37.185735238483169, -1.141248304679268], [37.184331429483159, -1.144666273679266], [37.185735238483169, -1.149060804679268], [37.183721078483181, -1.15315016067922], [37.181706918483194, -1.156446058679253], [37.18250037548318, -1.161756117679263], [37.182927621483195, -1.165967543679247], [37.180913461483151, -1.168958265679239], [37.177312386483202, -1.171582777679251], [37.174504769483171, -1.174146254679274], [37.168340218483188, -1.185071547679231], [37.166692269483171, -1.188550550679227], [37.163945687483185, -1.191480238679221], [37.161138070483155, -1.193860609679237], [37.157292855483199, -1.194837172679231], [37.156499398483156, -1.199231703679234], [37.158086312483185, -1.20197828567922], [37.159734261483202, -1.205762464679256], [37.156316293483194, -1.206983168679247], [37.15430213248316, -1.209241468679241], [37.156316293483194, -1.212354261679254], [37.15570594148317, -1.216443617679263], [37.15570594148317, -1.219739515679239], [37.154546273483156, -1.22254713267927], [37.151311410483167, -1.225537855679252], [37.144902718483188, -1.225843031679235], [37.141728890483186, -1.22645338267927], [37.139714730483199, -1.229566175679227], [37.137334359483184, -1.232556898679266], [37.133916390483186, -1.233838636679254], [37.130132211483151, -1.233655531679235], [37.126531136483202, -1.233167250679233], [37.123540414483152, -1.234876234679237], [37.119512093483188, -1.239453871679248], [37.119512093483188, -1.246961195679264], [37.116887582483166, -1.248548109679237], [37.113896859483184, -1.247876722679225], [37.110112679483159, -1.248426039679262], [37.110295785483167, -1.258863050679227], [37.106511605483199, -1.260266859679237], [37.103093636483202, -1.260938246679248], [37.094304574483196, -1.255078871679248], [37.087529671483189, -1.248975355679252], [37.095525277483198, -1.244763929679268], [37.091496957483166, -1.237866957679219], [37.087712778483187, -1.234143812679238], [37.08093787548318, -1.237256605679252], [37.073491586483151, -1.22376783667926], [37.07031775748316, -1.217664320679264], [37.061711800483174, -1.206372816679223], [37.058110726483157, -1.208570082679219], [37.054936898483156, -1.206861097679225], [37.048100961483151, -1.209241468679241], [37.044133675483174, -1.210279066679223], [37.038091195483155, -1.213269789679262], [37.033940804483159, -1.216748793679247], [37.031743539483152, -1.219983656679235], [37.023931039483152, -1.223828871679248], [37.02094031648317, -1.226880629679274], [37.016545785483167, -1.228467543679247], [37.013738168483194, -1.23158033667926], [37.012700570483155, -1.235364515679239], [37.008306039483152, -1.236035902679251], [37.003728402483198, -1.236035902679251], [37.001103890483186, -1.234754164679262], [36.997685921483189, -1.233350355679252], [36.995305550483174, -1.231458265679239], [36.991887582483166, -1.225354750679233], [36.988713754483165, -1.224073011679254], [36.985295785483167, -1.22346266067922], [36.982305062483185, -1.224256117679263], [36.979131234483184, -1.224744398679266], [36.971501839483203, -1.228162367679263], [36.964543832483166, -1.228833754679274], [36.961308968483188, -1.227735121679248], [36.958501351483157, -1.228833754679274], [36.947515023483156, -1.225965101679267], [36.939092171483189, -1.222180922679231], [36.933110726483157, -1.221936781679235], [36.925115121483195, -1.218152601679267], [36.922124398483156, -1.217176039679262], [36.919499886483202, -1.214551527679251], [36.916509164483152, -1.212476332679219], [36.914128793483194, -1.208570082679219], [36.915898812483185, -1.204663832679219], [36.917912972483172, -1.20228346167926], [36.926518929483159, -1.192945082679219], [36.931890023483156, -1.187451918679247], [36.940740121483195, -1.177930433679253], [36.9417166834832, -1.174329359679237], [36.938298714483203, -1.171948988679221], [36.934331429483159, -1.170056898679266], [36.930730355483199, -1.168836195679264], [36.926946175483174, -1.168164808679253], [36.9241385584832, -1.165662367679263], [36.92133094148317, -1.164441664679262], [36.919499886483202, -1.162183363679221], [36.915898812483185, -1.161573011679254], [36.912297738483169, -1.161450941679223], [36.908086312483185, -1.161573011679254], [36.902104867483153, -1.160535414679262], [36.897710336483151, -1.161328871679248], [36.89453650748316, -1.168531019679224], [36.889104379483165, -1.174329359679237], [36.890691293483194, -1.176953871679248], [36.8928885584832, -1.18153150767927], [36.89594031648317, -1.18665846167926], [36.896916879483165, -1.191663343679241], [36.893743050483174, -1.193738539679262], [36.890691293483194, -1.193555433679253], [36.887334359483184, -1.195569593679241], [36.883733285483167, -1.196179945679264], [36.878545296483189, -1.196363050679227], [36.87390662548318, -1.195874769679224], [36.870122445483155, -1.19447096167926], [36.866338265483186, -1.192151625679233], [36.863896859483184, -1.190442640679239], [36.860112680483205, -1.201856214679256], [36.857121957483166, -1.201734144679224], [36.852727425483174, -1.202649672679231], [36.850713265483186, -1.208570082679219], [36.850102914483152, -1.213147718679241], [36.833318246483195, -1.209058363679221], [36.834722054483159, -1.214856703679234], [36.799321664483152, -1.195264418679247], [36.790898812483185, -1.191541273679266], [36.787724984483184, -1.198560316679223], [36.784917367483153, -1.202832777679251], [36.785344613483169, -1.206067640679239], [36.788945687483185, -1.207776625679233], [36.784490121483195, -1.215161879679274], [36.781743539483152, -1.221753675679227], [36.778935921483189, -1.226758558679253], [36.77234412548318, -1.22346266067922], [36.770513070483155, -1.226270277679251], [36.762334359483184, -1.221570570679264], [36.756536019483171, -1.220349867679263], [36.745915902483198, -1.23713453567922], [36.738530648483156, -1.236280043679247], [36.730901254483165, -1.234754164679262], [36.72852088248316, -1.241651136679254], [36.725896371483195, -1.248242933679253], [36.725530160483167, -1.251538832679219], [36.721745980483199, -1.258130629679274], [36.718694222483172, -1.262647230679252], [36.715337289483152, -1.260633070679264], [36.707097543483194, -1.259351332679219], [36.70453406648317, -1.258069593679241], [36.701543343483188, -1.261670668679247], [36.69672156648317, -1.260633070679264], [36.694097054483159, -1.263928968679241], [36.69672156648317, -1.267652113679221], [36.693120492483153, -1.267957289679262], [36.695134652483198, -1.270581800679227], [36.6917166834832, -1.271680433679253], [36.691899789483152, -1.275464613679221], [36.68890906648317, -1.275464613679221], [36.689702523483156, -1.279248793679247], [36.68890906648317, -1.282849867679263], [36.686345589483203, -1.286450941679223], [36.6839041834832, -1.293469984679237], [36.681706918483194, -1.298047621679248], [36.678533089483203, -1.301282484679237], [36.674321664483152, -1.307263929679268], [36.670903695483155, -1.306043226679267], [36.6663260584832, -1.313672621679248], [36.663945687483185, -1.31043775767927], [36.662908089483203, -1.305554945679264], [36.660893929483159, -1.303479750679233], [36.649114144483171, -1.300855238679221], [36.609746468483188, -1.293469984679237], [36.605535043483194, -1.291883070679264], [36.58594275748316, -1.28895338267927], [36.573918832483166, -1.286450941679223], [36.564336312483185, -1.284741957679219], [36.525945199483196, -1.277051527679251], [36.5003104334832, -1.272229750679233], [36.492314828483181, -1.269544203679234], [36.503118050483174, -1.255872328679234], [36.515141976483157, -1.242566664679262], [36.5178885584832, -1.225781996679248], [36.522527230483199, -1.209180433679253], [36.527104867483153, -1.194043714679256], [36.535527718483188, -1.164075453679234], [36.538945687483185, -1.150464613679221], [36.545720589483203, -1.126355726679267], [36.548711312483185, -1.12293775767927], [36.554936898483156, -1.116651136679254], [36.558537972483172, -1.111646254679274], [36.568913949483196, -1.101758558679253], [36.572331918483194, -1.099744398679266], [36.574101937483185, -1.096265394679224], [36.578923714483203, -1.087964613679221], [36.587102425483174, -1.072644789679262], [36.591741097483172, -1.068067152679251], [36.591924203483181, -1.061231214679256], [36.591313851483157, -1.052747328679234], [36.590520394483171, -1.048657972679225], [36.588689339483203, -1.043958265679239], [36.589116586483151, -1.038770277679251], [36.591741097483172, -1.033032972679225], [36.5921073084832, -1.025159437679238], [36.594304574483196, -1.015332777679251], [36.59570838248316, -1.011975843679241], [36.59570838248316, -1.007947523679266], [36.596929086483151, -1.001538832679219], [36.597295296483189, -0.997632582679219], [36.598332894483171, -0.993482191679223], [36.597295296483189, -0.985364515679239], [36.593694222483172, -0.985547621679248], [36.590886605483199, -0.983777601679267], [36.588689339483203, -0.979383070679264], [36.587529671483189, -0.97645338267927], [36.588506234483184, -0.965344984679237], [36.587102425483174, -0.962659437679238], [36.58594275748316, -0.959363539679262], [36.581304086483151, -0.949658949679249], [36.578496468483188, -0.946179945679264], [36.574346078483181, -0.944531996679248], [36.569707406483182, -0.945752699679249], [36.565129769483171, -0.942029554679268], [36.562322152483198, -0.939038832679219], [36.566106332483166, -0.93635328567922], [36.570500863483169, -0.933667738679221], [36.573308480483199, -0.932141859679237], [36.570500863483169, -0.929761488679221], [36.567510140483186, -0.928479750679233], [36.563725961483151, -0.928174574679249], [36.560491097483172, -0.927075941679223], [36.554936898483156, -0.926648695679264], [36.556706918483194, -0.919934828679234], [36.565923226483157, -0.914258558679253], [36.571111214483203, -0.910230238679221], [36.564885629483165, -0.90736158667926], [36.566106332483166, -0.903760511679254], [36.58148719148317, -0.892774183679253], [36.584538949483196, -0.89173658667926], [36.58734656648317, -0.889966566679223], [36.590337289483152, -0.88856275767927], [36.592290414483152, -0.885633070679264], [36.593511117483153, -0.882154066679223], [36.595342171483189, -0.877942640679239], [36.598699105483199, -0.871472914679262], [36.601689828483181, -0.863843519679224], [36.598943246483195, -0.858838636679254], [36.596135629483165, -0.854444105679252], [36.592900765483186, -0.850232679679268], [36.591496957483166, -0.844373304679268], [36.589543832483166, -0.82923658667926], [36.596745980483199, -0.82893141067922], [36.605107796483189, -0.82996900767927], [36.609319222483172, -0.830762464679256], [36.613896859483184, -0.830945570679264], [36.619512093483188, -0.831433851679267], [36.622930062483185, -0.831372816679223], [36.622685921483189, -0.828076918679246], [36.630498421483189, -0.820569593679241], [36.633489144483171, -0.81806715267925], [36.636907113483169, -0.814038832679219], [36.67133094148317, -0.78205641067922], [36.673528207483166, -0.77845533667926], [36.667912972483172, -0.776136000679233], [36.66351844148317, -0.774854261679254], [36.660893929483159, -0.773450453679234], [36.657720101483157, -0.77314527767925], [36.654546273483156, -0.773633558679253], [36.650517953483181, -0.77454908667926], [36.64648963248316, -0.773084242679263], [36.6507010584832, -0.768445570679264], [36.655522836483151, -0.765760023679266], [36.659490121483195, -0.768079359679237], [36.662908089483203, -0.767774183679253], [36.666509164483152, -0.763745863679221], [36.669499886483202, -0.761243422679231], [36.673345101483157, -0.759961683679253], [36.68250037548318, -0.762464125679233], [36.686770107483191, -0.764234238679253]]]
    }
  }]
};
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44111" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","Kiambu_county.js"], null)
//# sourceMappingURL=/Kiambu_county.56cc2eb2.js.map