<?php
namespace Luis\Project\components;

class Dock{
    private string $dock;
    public function __construct()
    {
        $this->dock='
        <div class="bar-Block">
        <div class="dock">
            <ul class="dockCont" id="dock">
                <a id="finder" class="item" onclick="mostrar()">
                    <li>Finder</li>
                    <img src="src/views/assets/img/dock/finder.png">
                </a>
                
                <a id="appStore" class="item">
                    <li>AppStore</li>
                    <img src="src/views/assets/img/dock/appStore.png">
                </a>
                
                <a id="notes" class="item">
                    <li>Calendar</li>
                    <img src="src/views/assets/img/dock/notes.png">
                </a>

                <a id="calendar" class="item">
                    <li>Calendar</li>
                    <img src="src/views/assets/img/dock/calendar.png">
                </a>
                
                <a id="contacts" class="item">
                    <li>Contacts</li>
                    <img src="src/views/assets/img/dock/contacts.png">
                </a>
                
                <a id="siri" class="item">
                    <li>Siri</li>
                    <img src="src/views/assets/img/dock/siri.png">
                </a>

                <a id="facetime" class="item">
                    <li>Facetime</li>
                    <img src="src/views/assets/img/dock/facetime.png">
                </a>

                <a id="reminders" class="item">
                    <li>Reminders</li>
                    <img src="src/views/assets/img/dock/reminders.png">
                </a>

                <a id="maps" class="item">
                    <li>Maps</li>
                    <img src="src/views/assets/img/dock/maps.png">
                </a>

                <a id="trash" class="item">
                    <li>Trash</li>
                    <img src="src/views/assets/img/dock/trash_empty.png">
                </a>
            </ul>
        </div>
        </div>
        ';
    }
    public function index(){
        return $this->dock;
    }
}