GUIM_Framework
==============

A customizable Graphic User Interface Framework. Build your web page in minutes.

Default options
==============

It has a HTML templated based on Foundation Zurb Framework. If you want to customize it, you can edit the UI
library and put your own template. (great documentation coming soon).


Usage
==============

GUIM.page({
    name: 'Calculus',
    launch: function () {

        GUIM.create({
            extend: 'TwoColumnsLayout',
            items: [
			{
                type: 'label',
                for: '_auditorName',
                text: 'Auditor',
                with: [{
                        id: '_auditorName',
                        type: 'textbox'
                    }

                ]
            }, 
			{
                type: 'label',
                for: '_performedDate',
                text: 'Performed Date',
                with: [{
                        id: '_performedDate',
                        type: 'textbox'
                    }

                ]
            }, 
			{
                type: 'label',
                for: '_auditErrorStatus',
                text: 'Errors',
                with: [{
                        id: '_auditErrorStatus',
                        type: 'textbox'
                    }

                ]
            }
			]
        });
    }
})