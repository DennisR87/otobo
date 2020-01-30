/* OTOBO is a web-based ticketing system for service organisations.

Copyright (C) 2001-2019 OTRS AG, https://otrs.com/
Copyright (C) 2019-2020 Rother OSS GmbH, https://otobo.de/

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

"use strict";

var Core = Core || {};
Core.Customer = Core.Customer || {};

/**
 * @namespace Core.Customer.TicketSearch
 * @memberof Core.Customer
 * @author Rother OSS GmbH
 * @description
 *      This namespace contains special functions for the ticket search in the customer interface.
 */
Core.Customer.TicketSearch = (function (TargetNS) {

    /**
     * @name Init
     * @memberof Core.Customer.TicketSearch
     * @function
     * @description
     *      This function initializes the module functionality.
     */
    TargetNS.Init = function(){
        $('#oooTicketSearchBox').on('click', function () {
            $('#oooTicketSearch').css('display', 'inline-block');
            $('#oooTicketSearch').focus();
            $('#oooTicketSearch').addClass('oooFull');

            if ( Core.Config.Get('ESActive') == 1 ){
                Core.UI.Elasticsearch.InitSearchField( $('#oooTicketSearch'), "CustomerElasticsearchQuickResult");
            }

            $('#oooTicketSearch').on('blur', function () {
                setTimeout( function() {
                    $('#oooTicketSearch').hide();
                    $('#oooTicketSearch').removeClass('oooFull');
                },60);
            });
        });

        /*Core.App.Subscribe('Event.UI.Dialog.CloseDialog.Close', function() {
            $('#oooTicketSearch').blur();
        });*/

    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Core.Customer.TicketSearch || {}));
