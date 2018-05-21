define(['config'], function (config) {
    var Routes={
        defaultRoute: '/fullContainer',
        routes: {
          'testDemo':{
                templateUrl: 'test/testDemo.html',
                url: '/testDemo',
                controller:'testDemoCtrl',
                dependencies: ['test/testDemo'],
                allowAnonymous: true
            },
            'table':{
                templateUrl: 'test/table.html',
                url: '/table',
                controller:'tableCtrl',
                dependencies: ['test/table'],
                allowAnonymous: true
            },
            'loadmaster':{
                templateUrl: 'tool/loadmaster/loadmaster.html',
                url: '/loadmaster',
                controller:'loadmasterCtrl',
                dependencies: ['tool/loadmaster/loadmaster'],
                allowAnonymous: true
            },
            'international':{
                templateUrl: 'tool/international/international.html',
                url: '/international',
                controller:'internationalCtrl',
                dependencies: ['tool/international/international'],
                allowAnonymous: true
            },
            'classified':{
                templateUrl: 'tool/classified/classified.html',
                url: '/classified',
                controller:'classifiedCtrl',
                dependencies: ['tool/classified/classified'],
                allowAnonymous: true
            },
            'prieInquiry':{
                templateUrl: 'tool/prieInquiry/prieInquiry.html',
                url: '/prieInquiry',
                controller:'prieInquiryCtrl',
                dependencies: ['tool/prieInquiry/prieInquiry'],
                allowAnonymous: true
            },
            'profile':{
                templateUrl: 'personalCenter/profile/profile.html',
                url: '/profile',
                controller:'profileCtrl',
                dependencies: ['personalCenter/profile/profile'],
                allowAnonymous: true
            },
            'myMessage':{
                templateUrl: 'personalCenter/myMessage/myMessage.html',
                url: '/myMessage',
                controller:'myMessageCtrl',
                dependencies: ['personalCenter/myMessage/myMessage'],
                allowAnonymous: true
            },
            'conferenceActivities':{
                templateUrl: 'contactsCircle/conferenceActivities/conferenceActivities.html',
                url: '/conferenceActivities',
                controller:'conferenceActivitiesCtrl',
                dependencies: ['contactsCircle/conferenceActivities/conferenceActivities'],
                allowAnonymous: true
            },
            'findingPartner':{
                templateUrl: 'contactsCircle/findingPartner/findingPartner.html',
                url: '/findingPartner',
                controller:'findingPartnerCtrl',
                dependencies: ['contactsCircle/findingPartner/findingPartner'],
                allowAnonymous: true
            },
            'myApp':{
                templateUrl: 'management/myApp/myApp.html',
                url: '/myApp',
                controller:'myAppCtrl',
                dependencies: ['management/myApp/myApp'],
                allowAnonymous: true
            },
            'freightPurchasing':{
                templateUrl: 'management/freightPurchasing/freightPurchasing.html',
                url: '/freightPurchasing',
                controller:'freightPurchasingCtrl',
                dependencies: ['management/freightPurchasing/freightPurchasing'],
                allowAnonymous: true
            },
            'freightSet':{
                templateUrl: 'management/freightSet/freightSet.html',
                url: '/freightSet',
                controller:'freightSetCtrl',
                dependencies: ['management/freightSet/freightSet'],
                allowAnonymous: true
            },
            'userAnalysis':{
                templateUrl: 'management/userAnalysis/userAnalysis.html',
                url: '/userAnalysis',
                controller:'userAnalysisCtrl',
                dependencies: ['management/userAnalysis/userAnalysis'],
                allowAnonymous: true
            },
            'invoice':{
                templateUrl: 'business/invoice/invoice.html',
                url: '/invoice',
                controller:'invoiceCtrl',
                dependencies: ['business/invoice/invoice'],
                allowAnonymous: true
            },
            'invoiceList':{
                templateUrl: 'business/invoice/invoiceList.html',
                url: '/invoiceList',
                controller:'invoiceListCtrl',
                dependencies: ['business/invoice/invoiceList'],
                allowAnonymous: true
            },
            'experts':{
                templateUrl: 'business/experts/experts.html',
                url: '/experts',
                controller:'expertsCtrl',
                dependencies: ['business/experts/experts'],
                allowAnonymous: true
            },
            'fullContainer':{
                templateUrl: 'business/fullContainer/fullContainer.html',
                url: '/fullContainer',
                controller:'fullContainerCtrl',
                dependencies: ['business/fullContainer/fullContainer'],
                allowAnonymous: true
            },
            'seaPinxiang':{
                templateUrl: 'business/seaPinxiang/seaPinxiang.html',
                url: '/seaPinxiang',
                controller:'seaPinxiangCtrl',
                dependencies: ['business/seaPinxiang/seaPinxiang'],
                allowAnonymous: true
            },
            'trucking':{
                templateUrl: 'business/trucking/trucking.html',
                url: '/trucking',
                controller:'truckingCtrl',
                dependencies: ['business/trucking/trucking'],
                allowAnonymous: true
            },
            'repository':{
                templateUrl: 'tool/repository/repository.html',
                url: '/repository',
                controller:'repositoryCtrl',
                dependencies: ['tool/repository/repository'],
                allowAnonymous: true
            },
            'user':{
                templateUrl: 'user/user.html',
                url: '/user',
                controller:'userCtrl',
                dependencies: ['user/user'],
                allowAnonymous: true
            }
        }
    };

    var htmlDir=config.htmlDir;
    var controllerJsDir=config.controllerJsDir;
    //根据中英文切换目录
   for(var key in Routes.routes){
       var temalateUrl=Routes.routes[key].templateUrl;
       var dependencies=Routes.routes[key].dependencies;
           Routes.routes[key].templateUrl=htmlDir+temalateUrl;
       for(var i=0;i<dependencies.length;i++){
           dependencies[i]=controllerJsDir+dependencies[i];
       }
       Routes.routes[key].dependencies=dependencies;
   }
    return Routes;

});