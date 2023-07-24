<?php

class Thesaurus
{
    private $thesaurus;

    public function __construct(array $thesaurus)
    {
        $this->thesaurus = $thesaurus;
    }

    public function getSynonyms(string $word): string
    {
        $result = array();
        $result['word'] = $word;
        $synonyms = array();
      
        if ($this->thesaurus[$word]) {
          $synonyms = $this->thesaurus[$word];
        }
      
        $result['synonyms'] = $synonyms;
        return json_encode($result);
    }
}

$thesaurus = new Thesaurus(
    [
        "buy" => array("purchase"),
        "big" => array("great", "large")
    ]
);

echo $thesaurus->getSynonyms("big");
echo "\n";
echo $thesaurus->getSynonyms("agelast");
