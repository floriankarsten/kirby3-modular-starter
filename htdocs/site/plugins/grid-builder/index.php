<?php



Kirby::plugin('floriankarsten/grid-builder', [
    'fields' => [
        'gridbuilder' => [
            'props' => [
                // 'message' => function (string $message) {
                //     return $message;
                // },
                'cols' => function (int $cols = 8) {
                    return $cols;
                },
                'gap' => function (int $gap = 1) {
                    return $gap;
                },
                'builderfield' => function (string $builderfield) {
                    return $builderfield;
                }
            ],
            'computed' => [
                'layout' => function () {
                    $final = [];
                    $masterBuilder = Yaml::decode(page()->{$this->builderfield()}());
                    $grid = Yaml::decode($this->value);

                    foreach ($masterBuilder as $builderItem) {
                        $griditem = $grid[array_search($builderItem['_uid'], array_column($grid, 'i'))];
                        // dump($builderItem);
                        // dump($griditem);
                        // die();
                        $final[] = [
                            'i'=> (string) $builderItem['_uid'],
                            'x' => (int) $griditem['x'],
                            'y' => (int) $griditem['y'],
                            'w' => (int) $griditem['w'],
                            'h' => (int) $griditem['h'],
                            // 'i' => (string) $griditem['i'] ?: '1',
                        ];
                    }

                    // $obj_merged = (object) array_merge((array) Yaml::decode($this->value), (array) $this->masterBuilder);

                    // dump($final);
                    // die();

                    return $final;
                    return Yaml::decode($this->value);

                },
                'masterBuilder' => function () {
                    // $builderfield = $this->builderfield();
                    // $masterBuilder = page()->{$this->builderfield()}();
                    // dump($masterBuilder);
                    // die();
                    return page()->{$this->builderfield()}();
                },
                'allThis' => function () {
                    return 'all this';
                }

            ]
        ]
    ]
]);
