// requires
var util = require('util');
var qx = require("../../../js/qooxdoo/qooxdoo-5.0.2-sdk/tool/grunt");

// grunt
module.exports = function(grunt) {
  var config = {

    generator_config: {
      let: {
      }
    },

    common: {
      "APPLICATION" : "civixstudio",
      "QOOXDOO_PATH" : "../../../js/qooxdoo/qooxdoo-5.0.2-sdk",
      "LOCALES": ["en"],
      "QXTHEME": "civixstudio.theme.Theme"
    }

    /*
    myTask: {
      options: {},
      myTarget: {
        options: {}
      }
    }
    */
  };

  var mergedConf = qx.config.mergeConfig(config);
  // console.log(util.inspect(mergedConf, false, null));
  grunt.initConfig(mergedConf);

  qx.task.registerTasks(grunt);

  // grunt.loadNpmTasks('grunt-my-plugin');
};
