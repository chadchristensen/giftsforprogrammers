const categories = [
    {
        id: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        name: 'Threads'
    },
    {
        id: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        name: 'Crib'
    },
    {
        id: '2cd9aec6-76d6-4307-90c8-cce1f74a2eda',
        name: 'Tech'
    }
]

const posts = [
    {
        title: 'sumptus deprecator dicta',
        slug: 'sumptus-deprecator-dicta',
        description: 'Vacuus spero textilis dolor congregatio cresco theatrum antea solium. Utilis vobis deporto doloribus abscido acceptus urbs cognomen. Cui nostrum combibo universe denuncio.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://picsum.photos/seed/BzTzA/640/480',
        imageAltText: 'decretum pauper ipsam',
        status: 'Scheduled',
        publishDate: '2024-12-11',
        isAffiliateLink: false,
        callToActionText: 'Buy from carus',
        callToActionLink: 'https://striking-ground.net/',
        updated_at: null
    },
    {
        title: 'deludo adfectus perferendis',
        slug: 'deludo-adfectus-perferendis',
        description: 'Consequuntur aperte audacia. A verus constans defaeco voro coepi vulariter. Statim comedo amet tantillus.\n' +
            'Pectus appono defluo conturbo apud ait recusandae sint antea. Corrumpo possimus spoliatio bestia ver tam abutor. Conduco uxor cunabula tondeo sequi coadunatio carmen.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://picsum.photos/seed/XWKYHnH1N/640/480',
        imageAltText: 'accusamus decretum depopulo',
        status: 'Published',
        publishDate: '2023-11-23',
        isAffiliateLink: false,
        callToActionText: 'Buy from tracto',
        callToActionLink: 'https://immediate-toaster.info/',
        updated_at: '2024-02-14'
    },
    {
        title: 'complectus venio attonbitus',
        slug: 'complectus-venio-attonbitus',
        description: 'Conservo cubitum demoror bibo strues tactus arbor. Ventosus copiose calco suscipit. Defetiscor spiculum contra caries sordeo ut comedo accusamus defero.\n' +
            'Tempore laboriosam universe vilicus valeo tutis unus vigor. Volutabrum vulnus volva suggero. Toties quas sortitus beatus tantum deserunt abutor minima adnuo optio.\n' +
            'Adsum autem solutio victoria correptius tres. Umquam verecundia consequuntur dolore. Vado statim quas demens chirographum curiositas antepono capio bos culpa.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://loremflickr.com/640/480?lock=8586145208205312',
        imageAltText: 'facilis tutis demitto',
        status: 'Scheduled',
        publishDate: '2025-01-26',
        isAffiliateLink: true,
        callToActionText: 'Buy from tollo',
        callToActionLink: 'https://golden-torte.com/'
    },
    {
        title: 'sufficio statua abscido',
        slug: 'sufficio-statua-abscido',
        description: 'Commodi articulus cubitum eligendi saepe arca strenuus deprimo agnosco. Cursus tantum tamen cur benigne aspernatur accedo qui ex exercitationem. Cohaero triumphus uberrime admoneo vicinus nostrum veniam.\n' +
            'Mollitia vapulus defungo adduco defetiscor. Ago sopor trucido arx adhuc quis. Tepidus alienus capio expedita subvenio distinctio.\n' +
            'Pectus delicate inflammatio blanditiis crudelis. Depereo capitulus traho trado adicio aurum. Auctus allatus titulus depereo creber.\n' +
            'Tredecim vitae pectus theologus venio comminor delinquo contego. Adaugeo desparatus caritas. Utrum ulciscor amita suppellex.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://picsum.photos/seed/LTJCvMO/640/480',
        imageAltText: 'quia appello statua',
        status: 'Scheduled',
        publishDate: '2024-09-30',
        isAffiliateLink: true,
        callToActionText: 'Buy from quae',
        callToActionLink: 'https://leafy-porter.biz/',
        updated_at: null
    },
    {
        title: 'volutabrum autem cursim',
        slug: 'volutabrum-autem-cursim',
        description: 'Adimpleo defessus accedo theatrum. Excepturi vinco harum. Cursim corrigo clamo amo ambitus vereor nostrum non.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://picsum.photos/seed/w2KZw9JN/640/480',
        imageAltText: 'ocer curia trado',
        status: 'Published',
        publishDate: '2023-10-22',
        isAffiliateLink: true,
        callToActionText: 'Buy from compono',
        callToActionLink: 'https://informal-bayou.info',
        updated_at: '2024-01-20'
    },
    {
        title: 'vere corrumpo alias',
        slug: 'vere-corrumpo-alias',
        description: 'Usque caries antepono cunabula. Balbus auditor tristis tertius atavus ait. Apto territo tantum conspergo degenero tutamen.\n' +
            'Caute somnus alias absorbeo demoror patior audax minima desipio claro. Cupio conventus cedo suscipit. Cernuus desino aspicio tripudio arbor.\n' +
            'Aestivus amplexus quo ustilo velit. Barba viduo tumultus corroboro audax voluptatum coepi spoliatio optio aliqua. Molestiae anser uterque.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://loremflickr.com/640/480?lock=1091253596848128',
        imageAltText: 'adflicto venustas attollo',
        status: 'Scheduled',
        publishDate: '2024-08-01',
        isAffiliateLink: false,
        callToActionText: 'Buy from valens',
        callToActionLink: 'https://austere-permit.net',
        updated_at: null
    },
    {
        title: 'cubicularis celo tracto',
        slug: 'cubicularis-celo-tracto',
        description: 'Aetas stipes sed carpo. Doloremque censura itaque appello contra cenaculum statua ustilo. Conspergo cognatus carbo adstringo tandem voluptatibus.\n' +
            'Valens timor temporibus desino amissio. Accusantium ademptio tunc utrimque compono comparo. At sit nisi amicitia adstringo carbo curo conicio.\n' +
            'Angulus comburo coadunatio. Cito cultellus cervus cum vox aliquam. Atrocitas deludo sulum vestigium.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://loremflickr.com/640/480?lock=8900226546925568',
        imageAltText: 'suppono voluptatem thymbra',
        status: 'Draft',
        publishDate: null,
        isAffiliateLink: false,
        callToActionText: 'Buy from adaugeo',
        callToActionLink: 'https://far-off-slime.org',
        updated_at: null
    },
    {
        title: 'pecus vergo demo',
        slug: 'pecus-vergo-demo',
        description: 'Ustilo conculco despecto quaerat capio aduro absconditus. Dolores timidus corroboro triduana fugit abeo. Utor aranea tutis adulatio adnuo barba.\n' +
            'Iste ubi amitto tergo charisma surculus tardus ventosus benevolentia dedico. Coadunatio cupressus sumptus cauda. Conforto vicissitudo vito.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://picsum.photos/seed/95QEmK/640/480',
        imageAltText: 'aptus nostrum acceptus',
        status: 'Published',
        publishDate: '2024-01-09',
        isAffiliateLink: false,
        callToActionText: 'Buy from creo',
        callToActionLink: 'https://foolish-gender.org/',
        updated_at: '2024-03-20'
    },
    {
        title: 'aeternus talio enim',
        slug: 'aeternus-talio-enim',
        description: 'Degusto nesciunt reprehenderit demergo. Dedico tabula apostolus quidem solitudo videlicet attollo. Urbs altus tripudio unus vicissitudo temperantia tolero ex.\n' +
            'Adipiscor vero deleo dolor audax trucido calcar vapulus. Ver averto canonicus fugiat optio acquiro. Causa apparatus tamquam demum vulnus defaeco sollers pariatur.\n' +
            'Surgo concedo cibus. Agnitio degenero quibusdam demoror tergiversatio cubicularis damnatio thesis. Spiritus spes nostrum sum adversus.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://loremflickr.com/640/480?lock=2284934314065920',
        imageAltText: 'adduco summa cohibeo',
        status: 'Draft',
        publishDate: null,
        isAffiliateLink: true,
        callToActionText: 'Buy from ipsa',
        callToActionLink: 'https://miserable-basket.net/',
        updated_at: null
    },
    {
        title: 'quaerat vere cognatus',
        slug: 'quaerat-vere-cognatus',
        description: 'Depopulo agnosco perferendis coadunatio speciosus. Numquam beneficium campana accusamus cedo cognatus degusto coadunatio. Amoveo appositus caveo cogito debitis.\n' +
            'Cras spectaculum eos. Vulgivagus pectus arma. Vox atrocitas vomito carmen thesis ipsa delego surgo.\n' +
            'Abeo subseco laborum uter asper. Et tergum substantia tabula. Accusator depraedor laudantium.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://loremflickr.com/640/480?lock=6599164259467264',
        imageAltText: 'aureus suppono assumenda',
        status: 'Draft',
        publishDate: null,
        isAffiliateLink: true,
        callToActionText: 'Buy from qui',
        callToActionLink: 'https://sophisticated-pumpernickel.info',
        updated_at: null
    },
    {
        title: 'veritatis animi cunae',
        slug: 'veritatis-animi-cunae',
        description: 'Calco cerno tempus umquam peccatus comburo theologus territo. Cohors eius iure caveo defendo aperiam inventore sperno. Voluptatum sursum corona unus aqua autem vicissitudo.\n' +
            'Audacia cogo corrupti quae articulus compono illo inventore cuppedia. Deficio curis voluptatem canto error pecco ait qui temporibus. Sodalitas vesper consequatur vito claro acquiro comedo desino.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://loremflickr.com/640/480?lock=1769143078486016',
        imageAltText: 'tum enim ancilla',
        status: 'Scheduled',
        publishDate: '2024-11-25',
        isAffiliateLink: false,
        callToActionText: 'Buy from cernuus',
        callToActionLink: 'https://fatal-condition.com/',
        updated_at: null
    },
    {
        title: 'eligendi incidunt urbs',
        slug: 'eligendi-incidunt-urbs',
        description: 'Timidus ubi color spes auctus conicio expedita conturbo calamitas. Tribuo degenero addo contra cornu. Verecundia vigor tabula atrocitas vulnus turbo.\n' +
            'Ipsa careo auxilium demonstro videlicet cohibeo voluptas. Voco derelinquo calcar argumentum ad textor aeger comptus commodi. Uter calcar vir synagoga tredecim earum.\n' +
            'Solus coaegresco depulso natus. Taedium veritatis spectaculum corrumpo earum. Carmen arca tamquam.\n' +
            'Comparo comes deporto occaecati comis tergum caput conculco corrigo corrupti. Pecus nostrum subito celebrer terreo vereor nulla. Distinctio adulescens comparo commodi.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://loremflickr.com/640/480?lock=8584672957169664',
        imageAltText: 'censura consequuntur civitas',
        status: 'Draft',
        publishDate: null,
        isAffiliateLink: true,
        callToActionText: 'Buy from sublime',
        callToActionLink: 'https://smooth-yard.net',
        updated_at: null
    },
    {
        title: 'dolorum aggero depopulo',
        slug: 'dolorum-aggero-depopulo',
        description: 'Alo sed trepide aeternus bestia voluptatem sol antea. Tergeo consequatur audio veritas vesco cultura cresco. Vito uredo cubo fuga cena vilis viduo.\n' +
            'Conqueror tertius solum. Colo bestia tutis apud arto virgo. Demitto aureus cado ambulo solum abstergo tubineus beatus.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://picsum.photos/seed/aZhb6Ub/640/480',
        imageAltText: 'tactus succedo vae',
        status: 'Published',
        publishDate: '2023-06-17',
        isAffiliateLink: true,
        callToActionText: 'Buy from numquam',
        callToActionLink: 'https://shrill-checkbook.org/',
        updated_at: null
    },
    {
        title: 'beatus repellat quasi',
        slug: 'beatus-repellat-quasi',
        description: 'Sui somnus sint distinctio tracto capto torqueo patrocinor congregatio. Defessus versus bellum cognatus curis aduro cometes curto. Argentum veritas aurum vinum tredecim canis.\n' +
            'Tandem viduo supellex culpa curtus curriculum appello. Coerceo vir adaugeo quasi sum sonitus tres vel pauper. Textus spes collum cicuta claustrum volva admiratio suasoria cauda.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://loremflickr.com/640/480?lock=7017972134576128',
        imageAltText: 'somnus dolores absconditus',
        status: 'Scheduled',
        publishDate: '2024-12-24',
        isAffiliateLink: false,
        callToActionText: 'Buy from comis',
        callToActionLink: 'https://idle-puggle.net',
        updated_at: null
    },
    {
        title: 'celo adversus curatio',
        slug: 'celo-adversus-curatio',
        description: 'Repellendus nulla cena. Deserunt facere advoco vinco aiunt. Vapulus teres tenus vindico.',
        categoryId: '2cd9aec6-76d6-4307-90c8-cce1f74a2eda',
        imageSrc: 'https://loremflickr.com/640/480?lock=2716824116396032',
        imageAltText: 'canto caecus suppono',
        status: 'Scheduled',
        publishDate: '2024-03-26',
        isAffiliateLink: true,
        callToActionText: 'Buy from angelus',
        callToActionLink: 'https://hideous-calm.info',
        updated_at: null
    },
    {
        title: 'bellum vereor degero',
        slug: 'bellum-vereor-degero',
        description: 'Absorbeo antepono deputo solutio terreo similique viscus demum. Traho vindico adopto decens deserunt. Tumultus asper quidem video aut cupiditate.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://loremflickr.com/640/480?lock=8897704950235136',
        imageAltText: 'caute ubi corrumpo',
        status: 'Scheduled',
        publishDate: '2025-02-22',
        isAffiliateLink: false,
        callToActionText: 'Buy from atqui',
        callToActionLink: 'https://acrobatic-metal.info',
        updated_at: null
    },
    {
        title: 'victoria thymum tibi',
        slug: 'victoria-thymum-tibi',
        description: 'Exercitationem defluo itaque admoneo mollitia. Circumvenio doloremque celebrer. Sponte vulnus constans.\n' +
            'Solum utrum itaque adulescens aperiam pecus pauper libero. Vereor sonitus tibi sustineo victus amaritudo cavus. Amita ademptio condico auditor auctus tremo.',
        categoryId: '2cd9aec6-76d6-4307-90c8-cce1f74a2eda',
        imageSrc: 'https://loremflickr.com/640/480?lock=467954609160192',
        imageAltText: 'neque subnecto decipio',
        status: 'Published',
        publishDate: '2023-07-30',
        isAffiliateLink: true,
        callToActionText: 'Buy from utrum',
        callToActionLink: 'https://whispered-remnant.biz',
        updated_at: null
    },
    {
        title: 'aro tero altus',
        slug: 'aro-tero-altus',
        description: 'Civis aegrotatio amiculum carcer altus. Ait terra commodi deporto. Speciosus abscido coaegresco sol coniuratio correptius voveo.\n' +
            'Uterque voluntarius absque deripio appono damnatio debitis curia congregatio videlicet. Spiritus tego cursim annus synagoga. Summopere provident argumentum molestias denego cariosus aeternus surgo.\n' +
            'Aggredior cilicium appello deprimo adversus eligendi. Colo depraedor comptus pecto commemoro torrens ullam consequuntur amplitudo conor. Curatio varietas amissio amaritudo theca urbanus.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://loremflickr.com/640/480?lock=3182810783285248',
        imageAltText: 'bos bos desipio',
        status: 'Published',
        publishDate: '2023-08-24',
        isAffiliateLink: true,
        callToActionText: 'Buy from trucido',
        callToActionLink: 'https://cooperative-trumpet.info',
        updated_at: '2024-01-01'
    },
    {
        title: 'venio arbor sequi',
        slug: 'venio-arbor-sequi',
        description: 'Cibus cogito utrimque. Et calamitas vergo. Audax alienus villa cognatus acquiro varietas.\n' +
            'Abutor pecco corona adaugeo clibanus torrens. Termes deinde desipio. Sum tepesco sulum suppono cavus tantum utrimque spiritus adeptio.\n' +
            'Utique abbas quidem tempore. Iure inflammatio debitis consequuntur caelum summisse aqua tonsor. Sufficio rerum sit amor utpote carmen.',
        categoryId: 'ecce5674-ce1a-4508-bba0-79c3747ffa73',
        imageSrc: 'https://picsum.photos/seed/vWTdN/640/480',
        imageAltText: 'amissio abeo cinis',
        status: 'Published',
        publishDate: '2023-11-17',
        isAffiliateLink: true,
        callToActionText: 'Buy from thesis',
        callToActionLink: 'https://puzzled-land.name/',
        updated_at: null
    },
    {
        title: 'curvo abstergo tabella',
        slug: 'curvo-abstergo-tabella',
        description: 'Denuncio depono fuga. Defaeco claustrum tubineus aperiam catena. Defero degero doloremque pariatur usus viriliter pauper bibo.\n' +
            'Velut dolore ex attero adficio creta thesis vitiosus conventus blanditiis. Vinculum alii vinco comedo alius spiritus aeternus contra dicta. Solum ad calamitas volo dignissimos amicitia sono.\n' +
            'Volubilis cinis velit voluptatem abutor repellendus cavus vado ante. Minus delicate asperiores arcesso accedo blandior tabgo totam decretum. Modi demonstro aut cibus deficio amita eaque bardus.\n' +
            'Porro benevolentia subiungo inventore thermae illum anser vergo cogo vestrum. Eos cicuta tum ipsam. Adnuo vacuus cerno terga tero.',
        categoryId: '1d0d118b-db6c-42a5-bf67-3f1696f1e290',
        imageSrc: 'https://picsum.photos/seed/RI3FY/640/480',
        imageAltText: 'eaque aeneus abscido',
        status: 'Published',
        publishDate: '2024-01-22',
        isAffiliateLink: false,
        callToActionText: 'Buy from conduco',
        callToActionLink: 'https://golden-conflict.org/',
        updated_at: null
    }
]

export {
    categories,
    posts
};