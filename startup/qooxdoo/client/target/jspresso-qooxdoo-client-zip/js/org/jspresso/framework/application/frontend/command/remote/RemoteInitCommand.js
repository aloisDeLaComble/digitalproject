/**
 * Copyright (c) 2005-2013 Vincent Vandenschrick. All rights reserved.
 * <p>
 * This file is part of the Jspresso framework. Jspresso is free software: you
 * can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version. Jspresso is
 * distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details. You should have received a copy of the GNU Lesser General Public
 * License along with Jspresso. If not, see <http://www.gnu.org/licenses/>.
 */

qx.Class.define("org.jspresso.framework.application.frontend.command.remote.RemoteInitCommand", {
  extend: org.jspresso.framework.application.frontend.command.remote.RemoteCommand,

  construct: function () {
    this.base(arguments);
  },

  properties: {
    navigationActions: {
      check: "Array"
    },
    actions: {
      check: "Array",
      nullable: true
    },
    secondaryActions: {
      check: "Array",
      nullable: true
    },
    helpActions: {
      check: "Array",
      nullable: true
    },
    workspaceActions: {
      check: "org.jspresso.framework.gui.remote.RActionList"
    },
    workspaceNames: {
      check: "Array"
    },
    workspaceDescriptions: {
      check: "Array"
    },
    exitAction: {
      check: "org.jspresso.framework.gui.remote.RAction"
    },
    size: {
      check: "org.jspresso.framework.util.gui.Dimension",
      nullable: true
    },
    applicationName: {
      check: "String"
    },
    applicationDescription: {
      check: "String",
      nullable: true
    }
  }
});
