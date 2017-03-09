/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/photos              ->  index
 * POST    /api/photos              ->  create
 * GET     /api/photos/:id          ->  show
 * PUT     /api/photos/:id          ->  update
 * DELETE  /api/photos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Photo from './photo.model';

var fs = require('fs');
var path = require('path');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Photos
export function index(req, res) {

  var filepath = path.join(__dirname, "../../../client/assets/photos") ;
  var colors = ["pink", "green", "yellow", "blue", "purple", "red"];
  var color_index = 0;
  fs.readdir(filepath, function(err, items) {
    var promise = new Promise(function(resolve, reject) {
      var folders = [];
      for (var key in items) {
        var folder = {}
        folder.color = colors[color_index];
        color_index++;
        if (color_index > colors.length - 1) {
          color_index = 0;
        }
        folder.name = items[key];
        folders.push(folder);
      }
      resolve(folders);
    });

    return promise
      .then(respondWithResult(res))
      .catch(handleError(res));
  });
}

// Gets a single Photo from the DB
export function show(req, res) {
  // return Photo.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
  var init_path = "../../../client/assets/photos/" + req.params.id;
  var init_client_path = "../../assets/photos/" + req.params.id;
  if (req.params.id === "stats" || req.params.id === "upcoming") {
    init_path = "../../../client/assets/" + req.params.id;
    init_client_path = "../../assets/" + req.params.id;
  }
  var filepath = path.join(__dirname, init_path);
  fs.readdir(filepath, function(err, items) {
    var promise = new Promise(function(resolve, reject) {
      var pictures = [];
      for (var key in items) {
        var picture = {};
        picture.src = init_client_path + "/" + items[key];
        picture.alt = req.params.id;
        pictures.push(picture);
      }
      resolve(pictures);
    });

    return promise
      .then(respondWithResult(res))
      .catch(handleError(res));
  });

}

// Creates a new Photo in the DB
export function create(req, res) {
  return Photo.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Photo in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Photo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Photo from the DB
export function destroy(req, res) {
  return Photo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
