// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2009-2011 Google, All Rights reserved
// Copyright 2011-2012 MIT, All rights reserved
// Released under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

package com.google.appinventor.server;

import com.google.appinventor.server.storage.StorageIo;
import com.google.appinventor.server.storage.StorageIoInstanceHolder;
import com.google.appinventor.server.util.CacheHeaders;
import com.google.appinventor.server.util.CacheHeadersImpl;
import com.google.appinventor.shared.rpc.ServerLayout;
import com.google.appinventor.shared.rpc.UploadResponse;

import com.google.appinventor.shared.storage.StorageUtil;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.*;
import java.util.logging.Logger;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet for uploading and downloading files for the Live Web App
 */
public class WebAppLaunchServlet extends OdeServlet {
  /*
   * URIs for launch request are structured as follows:
   *    /<baseurl>/webapp_launch/webapp/<filePath>
   */

    // Constants for accessing split URI
  /*
   * Upload kind is: "file".
   * Constants for this is defined in ServerLayout.
   */
  private static final int REQUEST_INDEX = 3;
  // Since the file path may contain slashes, it must be the last component in the URI.
  private static final int FILE_PATH_INDEX  = 4;
  private static final int SPLIT_LIMIT_FILE = 5;

  // Logging support
  private static final Logger LOG = Logger.getLogger(WebAppLaunchServlet.class.getName());

  //storage
  private final StorageIo storageIo = StorageIoInstanceHolder.INSTANCE;

  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {

    String userId = userInfoProvider.getUserId();
    String launchFile;

    try {
      String uri = req.getRequestURI();
      // First, call split with no limit parameter.
      String[] uriComponents = uri.split("/");
      String launchKind = uriComponents[REQUEST_INDEX];

      if (launchKind.equals(ServerLayout.WEBAPP_FILE)) {
        uriComponents = uri.split("/", SPLIT_LIMIT_FILE);
        if (FILE_PATH_INDEX > uriComponents.length) {
          throw CrashReport.createAndLogError(LOG, req, null,
                  new IllegalArgumentException("Missing web app file path."));
        }
        String fileName = uriComponents[FILE_PATH_INDEX];
        launchFile = storageIo.downloadUserFile(userId, fileName, "UTF-8");

      } else {
        throw CrashReport.createAndLogError(LOG, req, null,
                new IllegalArgumentException("Unknown launch kind: " + launchKind));
      }

    } catch (IllegalArgumentException e) {
      throw CrashReport.createAndLogError(LOG, req, null, e);
    }

    byte[] content = launchFile.getBytes();
    // Set http response information
    resp.setStatus(HttpServletResponse.SC_OK);
    resp.setContentType("text/html");
    resp.setContentLength(launchFile.length());

    // Attach download data
    ServletOutputStream out = resp.getOutputStream();
    out.write(content);
    out.close();
  }
}