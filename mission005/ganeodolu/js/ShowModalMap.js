export default function ShowModalMap({ $targetDialog, $targetDialogButton }) {

    // if (!$targetDialog.showModal) {
    //     dialogPolyfill.registerDialog($targetDialog);
    // }
    $targetDialogButton.addEventListener('click', function () {
        $targetDialog.showModal();
        // setTimeout(function(){
        //     map.relayout()
        // }, 1000)
    });
    $targetDialog.querySelector('button:not([disabled])')
        .addEventListener('click', function () {
            $targetDialog.close();
        });
}